const utils = require('@applitools/utils')
const makeTakeViewportScreenshot = require('./take-viewport-screenshot')

async function takeSimpleScreenshot({context, region, withStatusBar, wait, stabilization, debug = {}, logger}) {
  logger.verbose('Taking image of...')

  const driver = context.driver
  const takeViewportScreenshot = makeTakeViewportScreenshot({logger, driver, stabilization, debug})

  await utils.general.sleep(wait)

  const image = await takeViewportScreenshot({withStatusBar})

  if (region) {
    const cropRegion = await driver.getRegionInViewport(context, region)
    if (utils.geometry.isEmpty(cropRegion)) throw new Error('Screenshot region is out of viewport')
    image.crop(cropRegion)
    await image.debug({path: debug.path, suffix: 'region'})
    return {image, region: cropRegion}
  } else {
    return {image, region: utils.geometry.region({x: 0, y: 0}, image.size)}
  }
}

module.exports = takeSimpleScreenshot
