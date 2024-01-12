const utils = require('@applitools/utils')

async function extractCoordinatesForSelectorsAndElements({regionsToCalculate, screenshot, context, logger}) {
  const codedRegionsByCoordinates = []
  if (!regionsToCalculate.length) {
    logger.log('no coded regions to calculate, done')
    return codedRegionsByCoordinates
  }
  logger.log('calculating coordinates for coded regions that need them')
  logger.log('regions to calculate', regionsToCalculate)
  for (const codedRegion of regionsToCalculate) {
    if (codedRegion) {
      const {region} = codedRegion.region ? codedRegion : {region: codedRegion}
      const elements = await context.elements(region)
      if (elements.length > 0) {
        const contextLocationInViewport = await elements[0].context.getLocationInViewport()
        const scaledRegions = []
        for (const element of elements) {
          const elementRegion = await element.getRegion()
          const region = utils.geometry.offset(elementRegion, contextLocationInViewport)
          const scaledRegion = utils.geometry.scale(
            {
              x: Math.max(0, region.x - screenshot.region.x),
              y: Math.max(0, region.y - screenshot.region.y),
              width: region.width,
              height: region.height,
            },
            context.driver.viewportScale,
          )
          logger.log('scaled region', scaledRegion)
          scaledRegions.push(scaledRegion)
        }
        codedRegionsByCoordinates.push({
          regions: scaledRegions,
          selector: elements[0].commonSelector,
        })
      } else {
        codedRegionsByCoordinates.push({regions: []})
      }
    }
  }
  logger.log('calculated coordinates for coded regions done', codedRegionsByCoordinates)
  return codedRegionsByCoordinates
}

module.exports = extractCoordinatesForSelectorsAndElements
