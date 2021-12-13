function splitConfigsByBrowser(config) {
  const renderers = validateBrowsers(config);
  if (renderers.length) {
    const result = renderers.reduce(
      ([nonIE, IE], browser) => {
        if (isIE(browser)) {
          IE.push(browser);
        } else {
          nonIE.push(browser);
        }
        return [nonIE, IE];
      },
      [[], []],
    );

    return result.reduce(
      (acc, browser) => (browser.length > 0 ? acc.concat({...config, renderers: browser}) : acc),
      [],
    );
  } else {
    return [config];
  }
}

function shouldRenderIE(config) {
  return hasIE(config) && config.fakeIE;
}

function hasIE(config) {
  return validateBrowsers(config).some(isIE);
}

function isIE(browser) {
  return browser.name === 'ie' || browser.name === 'ie11';
}

function validateBrowsers(config) {
  if (config.renderers) {
    return Array.isArray(config.renderers) ? config.renderers : [config.renderers];
  } else {
    return [];
  }
}

module.exports = {splitConfigsByBrowser, shouldRenderIE, isIE};
