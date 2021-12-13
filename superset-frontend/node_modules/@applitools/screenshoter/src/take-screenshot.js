const {makeLogger} = require('@applitools/logger')
const getTarget = require('./get-target')
const scrollIntoViewport = require('./scroll-into-viewport')
const takeStitchedScreenshot = require('./take-stitched-screenshot')
const takeSimpleScreenshot = require('./take-simple-screenshot')
const extractCoordinatesForSelectorsAndElements = require('./extract-coordinates-for-selectors-and-elements')

async function takeScreenshot({
  driver,
  frames = [],
  region,
  regionsToCalculate = [],
  fully,
  scrollingMode,
  hideScrollbars,
  hideCaret,
  withStatusBar,
  overlap,
  framed,
  wait,
  stabilization,
  hooks,
  debug,
  logger,
  lazyLoad,
  webview,
}) {
  debug =
    debug ||
    (process.env.APPLITOOLS_DEBUG_SCREENSHOTS_DIR ? {path: process.env.APPLITOOLS_DEBUG_SCREENSHOTS_DIR} : debug)
  logger = logger ? logger.extend({label: 'screenshoter'}) : makeLogger({label: 'screenshoter'})

  // screenshot of a window/app was requested (fully or viewport)
  const window = !region && (!frames || frames.length === 0)

  // switch worlds as needed
  if (webview && driver.isNative) await driver.switchWorld(typeof webview === 'string' ? {id: webview} : null)
  if (window && !webview && driver.isWebView) await driver.switchWorld({goHome: true})

  // framed screenshots could be taken only when screenshot of window/app fully was requested
  framed = framed && fully && window
  // screenshots with status bar could be taken only when screenshot of app or framed app fully was requested
  withStatusBar = withStatusBar && driver.isNative && window && (!fully || framed)
  scrollingMode = driver.isNative ? 'scroll' : scrollingMode

  const activeContext = driver.currentContext
  const context =
    frames.length > 0
      ? await activeContext.context(frames.reduce((parent, frame) => ({...frame, parent}), null))
      : activeContext

  // traverse from main context to target context to hide scrollbars and preserve context state (scroll/translate position)
  for (const nextContext of context.path) {
    const scrollingElement = await nextContext.getScrollingElement()
    // unlike web apps, native apps do not always have scrolling element
    if (scrollingElement) {
      if (driver.isWeb && hideScrollbars) await scrollingElement.hideScrollbars()
      // this is unwanted but necessary side effect, because it is not possible to extract initial scroll position
      if (driver.isNative && !window) await scrollingElement.scrollTo({x: 0, y: 0}, {force: true})
      await scrollingElement.preserveState()
    }
  }

  // blur active element in target context
  const activeElement = driver.isWeb && hideCaret ? await context.blurElement() : null

  const target = await getTarget({window, context, region, fully, scrollingMode, logger})

  if (target.scroller) {
    await target.scroller.preserveState()
    if (driver.isWeb && hideScrollbars) await target.scroller.hideScrollbars()
  }

  if (!window && !driver.isNative) await scrollIntoViewport({...target, logger})

  if (fully && !target.region && target.scroller) await target.scroller.moveTo({x: 0, y: 0})

  const screenshot =
    fully && target.scroller
      ? await takeStitchedScreenshot({
          ...target,
          withStatusBar,
          overlap,
          framed,
          wait,
          stabilization,
          debug,
          logger,
          lazyLoad,
        })
      : await takeSimpleScreenshot({...target, withStatusBar, wait, stabilization, debug, logger})

  screenshot.image.scale(driver.viewportScale)

  const calculatedRegions = await extractCoordinatesForSelectorsAndElements({
    regionsToCalculate,
    screenshot,
    context,
    logger,
  })

  if (hooks && hooks.afterScreenshot) {
    await hooks.afterScreenshot({driver, scroller: target.scroller, screenshot})
  }

  return {
    ...screenshot,
    element: target.element,
    scrollingElement: target.scroller && target.scroller.element,
    calculatedRegions,
    async restoreState() {
      if (target.scroller) {
        await target.scroller.restoreScrollbars()
        await target.scroller.restoreState()
      }

      // if there was active element and we have blurred it, then restore focus
      if (activeElement) await context.focusElement(activeElement)

      // traverse from target context to the main context to restore scrollbars and context states
      for (const prevContext of context.path.reverse()) {
        const scrollingElement = await prevContext.getScrollingElement()
        if (scrollingElement) {
          if (driver.isWeb && hideScrollbars) await scrollingElement.restoreScrollbars()
          await scrollingElement.restoreState()
        }
      }

      // restore focus on original active context
      await activeContext.focus()

      // return driver to previous app world if switched
      await driver.switchWorld({restoreState: true})
    },
  }
}

module.exports = takeScreenshot
