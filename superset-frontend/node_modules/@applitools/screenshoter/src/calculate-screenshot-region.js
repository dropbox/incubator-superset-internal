const utils = require('@applitools/utils')

function calculateScreenshotRegion({cropRegion, stitchedImage, preMoveOffset, postMoveOffset} = {}) {
  cropRegion = !!cropRegion ? cropRegion : {x: 0, y: 0}
  const screenshotRegion = utils.geometry.region(cropRegion, stitchedImage.size)
  const moveOffset = utils.geometry.offsetNegative(postMoveOffset, preMoveOffset)
  return utils.geometry.offset(screenshotRegion, moveOffset)
}

module.exports = calculateScreenshotRegion
