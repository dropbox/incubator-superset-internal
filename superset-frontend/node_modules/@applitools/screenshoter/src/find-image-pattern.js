function findImagePattern(image, pattern) {
  const patterOffset = Math.round(pattern.offset * pattern.scale)
  const patternItemSize = Math.round(pattern.size * pattern.scale)
  for (let x = patterOffset; x <= image.width - patterOffset - pattern.mask.length * patternItemSize; ++x) {
    for (let y = patterOffset; y <= image.height - patterOffset; ++y) {
      const pixel = y * image.width + x
      if (isPattern(image, pixel, pattern)) return {x: x - patterOffset, y: y - patterOffset}
    }
  }
  return null
}

function isPattern(image, offset, pattern) {
  const length = Math.round(pattern.size * pattern.scale)
  for (const [index, color] of pattern.mask.entries()) {
    const maxLength = (index + 1) * pattern.size * pattern.scale // how many pixels actually could be occupied at this point
    const missedPixels = Math.abs(maxLength - Math.round(maxLength)) // how many pixels were missed due to rounding
    const skippedPixels = missedPixels >= 0.25 ? Math.ceil(missedPixels) : 0 // how many pixels should be skipped from checking in pattern (usually 1 or 0)
    for (let pixel = index * length; pixel < (index + 1) * length - skippedPixels; ++pixel) {
      const pixelColor = pixelColorAt(image, offset + pixel, length)
      if (pixelColor !== color) return false
    }
  }
  return true
}

function pixelColorAt(image, pixel) {
  const channels = 4
  for (let offset = 0; offset <= 3; ++offset) {
    const r = image.data[(pixel - offset) * channels]
    const g = image.data[(pixel - offset) * channels + 1]
    const b = image.data[(pixel - offset) * channels + 2]

    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b

    // if luminance is between black and white check the color of previous pixel
    if (offset < 3 && luminance >= 112 && luminance <= 144) continue

    return luminance < 128 ? /* black */ 1 : /* white*/ 0
  }
}

module.exports = findImagePattern
