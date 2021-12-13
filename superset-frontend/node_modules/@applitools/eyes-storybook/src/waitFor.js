async function waitFor(page, waitOn) {
  if (typeof waitOn === 'function') {
    return await page.waitForFunction(waitOn);
  } else if (typeof waitOn === 'number') {
    return await page.waitForTimeout(waitOn);
  } else if (typeof waitOn === 'string') {
    return waitOn.startsWith('//') || waitOn.startsWith('..')
      ? await page.waitForXPath(waitOn)
      : await page.waitForSelector(waitOn);
  }
}

module.exports = waitFor;
