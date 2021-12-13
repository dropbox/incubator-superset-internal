'use strict';
const pick = require('lodash.pick');
const utils = require('@applitools/utils');
const {resolve} = require('path');
const {deprecationWarning} = require('./errMessages');
const uniq = require('./uniq');
const MAX_DATA_GAP = 60;

function generateConfig({argv = {}, defaultConfig = {}, externalConfigParams = []}) {
  const defaultConfigParams = Object.keys(defaultConfig);
  const configPaths = argv.conf ? [resolve(process.cwd(), argv.conf)] : undefined;
  const configParams = uniq(defaultConfigParams.concat(externalConfigParams));
  const config = utils.config.getConfig({paths: configPaths, params: configParams});
  const argvConfig = pick(argv, configParams);
  const result = Object.assign({}, defaultConfig, config, argvConfig);

  // backward compatibility
  if (result.waitBeforeCapture === defaultConfig.waitBeforeCapture) {
    if (result.waitBeforeScreenshots !== defaultConfig.waitBeforeScreenshots) {
      console.log(
        deprecationWarning({
          deprecatedThing: "'waitBeforeScreenshots'",
          newThing: "'waitBeforeCapture'",
        }),
      );
      result.waitBeforeCapture = result.waitBeforeScreenshots;
    }
    if (result.waitBeforeScreenshot !== defaultConfig.waitBeforeScreenshot) {
      console.log(
        deprecationWarning({
          deprecatedThing: "'waitBeforeScreenshot'",
          newThing: "'waitBeforeCapture'",
        }),
      );
      result.waitBeforeCapture = result.waitBeforeScreenshot;
    }
  }

  if (typeof result.waitBeforeCapture === 'string' && !isNaN(parseInt(result.waitBeforeCapture))) {
    result.waitBeforeCapture = Number(result.waitBeforeCapture);
  }

  if (result.showLogs === '1') {
    result.showLogs = true;
  }

  result.testConcurrency = utils.types.isInteger(result.testConcurrency)
    ? result.testConcurrency
    : utils.types.isInteger(result.concurrency)
    ? result.concurrency * 5
    : 5;

  result.serverUrl = result.serverUrl
    ? result.serverUrl
    : utils.general.getEnvValue('SERVER_URL')
    ? utils.general.getEnvValue('SERVER_URL')
    : 'https://eyesapi.applitools.com';

  result.viewportSize = result.viewportSize ? result.viewportSize : {width: 1024, height: 600};

  result.saveNewTests = result.saveNewTests === undefined ? true : result.saveNewTests;
  result.keepBatchOpen = result.dontCloseBatches;
  result.fully = result.fully === undefined ? true : false;

  if (result.batchName) {
    result.batch = {name: result.batchName, ...result.batch};
  }

  if (result.batchId) {
    result.batch = {id: result.batchId, ...result.batch};
  }

  if (result.storyDataGap === undefined) {
    result.storyDataGap = Math.max(
      Math.min(result.testConcurrency * 2, MAX_DATA_GAP),
      result.testConcurrency,
    );
  }

  if (!result.browser) {
    result.renderers = [{name: 'chrome', width: 1024, height: 768}];
  } else {
    result.renderers = [];
    if (!Array.isArray(result.browser)) {
      result.browser = [result.browser];
    }
    result.renderers = result.browser.map(browser => {
      return browser.deviceName ? {chromeEmulationInfo: browser} : browser;
    });
  }
  delete result.browser;
  return result;
}
module.exports = generateConfig;
