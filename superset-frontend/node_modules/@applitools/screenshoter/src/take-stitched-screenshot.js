const utils = require('@applitools/utils')
const {makeImage} = require('@applitools/image')
const makeTakeViewportScreenshot = require('./take-viewport-screenshot')
const calculateScreenshotRegion = require('./calculate-screenshot-region')

async function takeStitchedScreenshot({
  logger,
  context,
  scroller,
  region,
  withStatusBar,
  overlap = {top: 10, bottom: 50},
  framed,
  wait,
  stabilization,
  debug,
  lazyLoad,
}) {
  logger.verbose('Taking full image of...')

  if (await scroller.element.isPager()) overlap = {top: 0, bottom: 0}

  const driver = context.driver
  const takeViewportScreenshot = makeTakeViewportScreenshot({logger, driver, stabilization, debug})
  const scrollerState = await scroller.preserveState()

  const initialOffset = region ? utils.geometry.location(region) : {x: 0, y: 0}
  const preMoveOffset = await scroller.getInnerOffset()
  const postMoveOffset = await scroller.moveTo(initialOffset)
  const expectedRemainingOffset = utils.geometry.offsetNegative(initialOffset, postMoveOffset)

  await utils.general.sleep(wait)

  const contentSize = await scroller.getContentSize({lazyLoad})

  logger.verbose(
    'preMoveOffset',
    preMoveOffset,
    'initialOffset',
    initialOffset,
    'postMoveOffset',
    postMoveOffset,
    'context.isMain',
    context.isMain,
  )

  logger.verbose('Getting initial image...')
  let image = await takeViewportScreenshot({name: 'initial', withStatusBar})
  const firstImage = framed ? makeImage(image) : null

  const scrollerRegion = await scroller.getClientRegion()
  const targetRegion = region
    ? utils.geometry.intersect(utils.geometry.region(postMoveOffset, scrollerRegion), region)
    : scrollerRegion
  logger.log('Target region calculated: ', targetRegion)

  const cropRegion = utils.geometry.round(await driver.getRegionInViewport(context, targetRegion))
  logger.log('Crop region calculated: ', cropRegion)
  if (utils.geometry.isEmpty(cropRegion)) throw new Error('Screenshot region is out of viewport')

  image.crop(withStatusBar ? utils.geometry.offset(cropRegion, {x: 0, y: driver.statusBarSize}) : cropRegion)
  await image.debug({...debug, name: 'initial', suffix: 'region'})

  const contentRegion = utils.geometry.region({x: 0, y: 0}, contentSize)
  logger.verbose('Scroller size:', contentRegion)

  if (region) region = utils.geometry.intersect(region, contentRegion)
  else region = contentRegion

  if (targetRegion.x !== region.x && targetRegion.width !== region.width) {
    logger.verbose('Compensating for region width differences...')
    logger.verbose(
      'region before compensation and the values to be used (a.k.a. expectedRemainingOffset)',
      region,
      expectedRemainingOffset,
    )
    region.x += expectedRemainingOffset.x
    region.width += expectedRemainingOffset.x
    logger.verbose('region after compensation', region)
  }
  region = utils.geometry.floor(region)

  const partSize = lazyLoad && driver.isNative ? {width: image.size.width, height: image.size.height / 2} : image.size
  const [initialRegion, ...partRegions] = utils.geometry.divide(region, partSize, overlap)
  logger.verbose('Part regions', partRegions)

  logger.verbose('Creating stitched image composition container')
  const stitchedImage = makeImage({auto: true})

  logger.verbose('Adding initial image...')
  stitchedImage.copy(image, {x: 0, y: 0})

  logger.verbose('Getting the rest of the image parts...')

  let lastImage = firstImage
  let scrollerRegionShift = {x: 0, y: 0}
  for (const partRegion of partRegions) {
    const partName = `${partRegion.x}_${partRegion.y}_${partRegion.width}x${partRegion.height}`
    logger.verbose(`Processing part ${partName}`)

    // compensate scroller region being shifted and top overlap
    const compensateOffset = {
      x: scrollerRegionShift.x + 0,
      y: scrollerRegionShift.y + (initialRegion.y !== partRegion.y ? overlap.top : 0),
    }
    const requiredOffset = utils.geometry.offsetNegative(utils.geometry.location(partRegion), compensateOffset)

    logger.verbose('Move to', requiredOffset)
    let actualOffset = await scroller.moveTo(requiredOffset)
    // actual scroll position after scrolling might be not equal to required position due to
    // scrollable region shift during scrolling so actual scroll position should be corrected
    if (!utils.geometry.equals(actualOffset, requiredOffset) && driver.isNative) {
      const actualScrollerRegion = await scroller.getClientRegion()
      scrollerRegionShift = {x: scrollerRegion.x - actualScrollerRegion.x, y: scrollerRegion.y - actualScrollerRegion.y}
    }
    actualOffset = utils.geometry.offset(actualOffset, scrollerRegionShift)

    const remainingOffset = {
      x: requiredOffset.x - actualOffset.x - expectedRemainingOffset.x + compensateOffset.x,
      y: requiredOffset.y - actualOffset.y - expectedRemainingOffset.y + compensateOffset.y,
    }

    const cropPartRegion = {
      x: cropRegion.x + remainingOffset.x,
      y: cropRegion.y + remainingOffset.y,
      width: partRegion.width,
      height: partRegion.height,
    }
    logger.verbose('Actual offset is', actualOffset, ', remaining offset is', remainingOffset)
    logger.verbose('cropPartRegion is', cropPartRegion)

    await utils.general.sleep(wait)

    if (utils.geometry.isEmpty(cropPartRegion) || !utils.geometry.isIntersected(cropRegion, cropPartRegion)) continue

    logger.verbose('Getting image...')
    image = await takeViewportScreenshot({name: partName})
    lastImage = framed ? makeImage(image) : null

    logger.verbose('cropping...')
    image.crop(cropPartRegion)
    await image.debug({...debug, name: partName, suffix: 'region'})

    const pasteOffset = utils.geometry.offsetNegative(utils.geometry.location(partRegion), initialOffset)
    stitchedImage.copy(image, pasteOffset)
  }

  logger.verbose('restoring scroller state', scrollerState)
  await scroller.restoreState(scrollerState)

  await stitchedImage.debug({...debug, name: 'stitched'})

  if (framed) {
    stitchedImage.frame(
      firstImage,
      lastImage,
      withStatusBar ? utils.geometry.offset(cropRegion, {x: 0, y: driver.statusBarSize}) : cropRegion,
    )
    await stitchedImage.debug({...debug, name: 'framed'})

    return {
      image: stitchedImage,
      region: calculateScreenshotRegion({stitchedImage, preMoveOffset, postMoveOffset}),
    }
  } else {
    return {
      image: stitchedImage,
      region: calculateScreenshotRegion({cropRegion, stitchedImage, preMoveOffset, postMoveOffset}),
    }
  }
}

module.exports = takeStitchedScreenshot
