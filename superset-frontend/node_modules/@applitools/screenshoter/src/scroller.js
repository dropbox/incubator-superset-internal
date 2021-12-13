const utils = require('@applitools/utils')

function makeScroller({logger, element, scrollingMode = 'mixed'}) {
  if (!element) return null

  const defaultElement = element

  return {
    element,
    moveTo,
    getInnerOffset,
    getContentSize,
    getClientRegion,
    getScrollOffset,
    getTranslateOffset,
    getShiftOffset,
    scrollTo,
    translateTo,
    shiftTo,
    preserveState,
    restoreState,
    hideScrollbars,
    restoreScrollbars,
  }

  async function moveTo(offset, element = defaultElement) {
    if (scrollingMode === 'scroll') return scrollTo(offset, element)
    if (scrollingMode === 'css') return translateTo(offset, element)
    if (scrollingMode === 'mixed') return shiftTo(offset, element)
    if (scrollingMode === 'mixed+') return shiftTo(offset, element, {formerlyCssScrollingMode: true})
  }

  async function getInnerOffset(element = defaultElement) {
    if (scrollingMode === 'scroll') return getScrollOffset(element)
    if (scrollingMode === 'css') return getTranslateOffset(element)
    if (scrollingMode === 'mixed') return getShiftOffset(element)
    if (scrollingMode === 'mixed+') return getShiftOffset(element)
  }

  async function getContentSize(options) {
    const size = await element.getContentSize(options)
    return size
  }

  async function getClientRegion() {
    const region = await element.getClientRegion()
    // const location = await element.context.getLocationInPage()
    return region
  }

  async function getScrollOffset(element = defaultElement) {
    try {
      const offset = await element.getScrollOffset()
      return offset
    } catch (err) {
      // Sometimes it is expected e.g. on Appium, otherwise, take care
      logger.verbose(`Failed to extract current scroll offset!`, err)
      return {x: 0, y: 0}
    }
  }

  async function getTranslateOffset(element = defaultElement) {
    try {
      const offset = await element.getTranslateOffset()
      return offset
    } catch (err) {
      // Sometimes it is expected e.g. on Appium, otherwise, take care
      logger.verbose(`Failed to extract current translate offset!`, err)
      return {x: 0, y: 0}
    }
  }

  async function getShiftOffset(element = defaultElement) {
    try {
      const scrollOffset = await element.getScrollOffset()
      const translateOffset = await element.getTranslateOffset()
      return utils.geometry.offset(scrollOffset, translateOffset)
    } catch (err) {
      // Sometimes it is expected e.g. on Appium, otherwise, take care
      logger.verbose(`Failed to set current scroll offset!.`, err)
      return {x: 0, y: 0}
    }
  }

  async function scrollTo(offset, element = defaultElement) {
    try {
      const scrollOffset = await element.scrollTo(offset)
      return scrollOffset
    } catch (err) {
      // Sometimes it is expected e.g. on Appium, otherwise, take care
      logger.verbose(`Failed to set current scroll offset!.`, err)
      return {x: 0, y: 0}
    }
  }

  async function translateTo(offset, element = defaultElement) {
    try {
      await element.scrollTo({x: 0, y: 0})
      const translateOffset = await element.translateTo(offset)
      return translateOffset
    } catch (err) {
      // Sometimes it is expected e.g. on Appium, otherwise, take care
      logger.verbose(`Failed to set current scroll offset!.`, err)
      return {x: 0, y: 0}
    }
  }

  async function shiftTo(offset, element = defaultElement, {formerlyCssScrollingMode} = {}) {
    try {
      const scrollOffset = await element.scrollTo(offset)
      if (utils.geometry.equals(scrollOffset, offset) && !formerlyCssScrollingMode) return scrollOffset

      // there is a "bug" in iOS that will not move a root element if it already scrolled, so it should be translated all the way
      if (element.driver.isIOS && (await element.isRoot())) {
        const translateOffset = await element.translateTo(offset)
        return translateOffset
      }

      const remainingOffset = utils.geometry.offsetNegative(offset, scrollOffset)
      const translateOffset = await element.translateTo(remainingOffset)

      return utils.geometry.offset(scrollOffset, translateOffset)
    } catch (err) {
      // Sometimes it is expected e.g. on Appium, otherwise, take care
      logger.verbose(`Failed to set current scroll offset!.`, err)
      return {x: 0, y: 0}
    }
  }

  async function preserveState(element = defaultElement) {
    try {
      return element.preserveState()
    } catch (err) {
      logger.verbose(`Failed to get current transforms!.`, err)
      return {}
    }
  }

  async function restoreState(state, element = defaultElement) {
    try {
      await element.restoreState(state)
    } catch (err) {
      logger.verbose(`Failed to restore state!.`, err)
    }
  }

  async function hideScrollbars(element = defaultElement) {
    try {
      return element.hideScrollbars()
    } catch (err) {
      logger.verbose(`Failed to get current transforms!.`, err)
      return {}
    }
  }

  async function restoreScrollbars(state, element = defaultElement) {
    try {
      await element.restoreScrollbars(state)
    } catch (err) {
      logger.verbose(`Failed to restore state!.`, err)
    }
  }
}

module.exports = makeScroller
