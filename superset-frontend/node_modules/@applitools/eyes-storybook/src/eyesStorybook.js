'use strict';
const puppeteer = require('puppeteer');
const getStories = require('../dist/getStories');
const {presult, delay} = require('@applitools/functional-commons');
const chalk = require('chalk');
const makeInitPage = require('./initPage');
const makeRenderStory = require('./renderStory');
const makeRenderStories = require('./renderStories');
const makeGetStoryData = require('./getStoryData');
const ora = require('ora');
const filterStories = require('./filterStories');
const addVariationStories = require('./addVariationStories');
const browserLog = require('./browserLog');
const memoryLog = require('./memoryLog');
const getIframeUrl = require('./getIframeUrl');
const createPagePool = require('./pagePool');
const getClientAPI = require('../dist/getClientAPI');
const {takeDomSnapshots} = require('@applitools/core');
const {Driver} = require('@applitools/driver');
const spec = require('@applitools/spec-driver-puppeteer');
const {refineErrorMessage} = require('./errMessages');
const {splitConfigsByBrowser} = require('./shouldRenderIE');
const executeRenders = require('./executeRenders');
const {makeCore} = require('@applitools/core');
const {makeUFGClient} = require('@applitools/ufg-client');

const CONCURRENT_PAGES = 3;
const MAX_RETRIES = 10;
const RETRY_INTERVAL = 1000;

async function eyesStorybook({
  config,
  logger,
  performance,
  timeItAsync,
  outputStream = process.stderr,
}) {
  let memoryTimeout;
  let renderIE = false;
  let transitioning = false;
  takeMemLoop();
  logger.log('eyesStorybook started');

  const {
    storybookUrl,
    waitBeforeCapture,
    readStoriesTimeout,
    reloadPagePerStory,
    proxy,
    testConcurrency,
  } = config;

  let iframeUrl;
  try {
    iframeUrl = getIframeUrl(storybookUrl);
  } catch (ex) {
    logger.log(ex);
    throw new Error(`Storybook URL is not valid: ${storybookUrl}`);
  }
  const agentId = `eyes-storybook/${require('../package.json').version}`;
  const browser = await puppeteer.launch(config.puppeteerOptions);
  logger.log('browser launched');
  const page = await browser.newPage();
  const core = await makeCore({
    spec,
    concurrency: testConcurrency,
    logger,
    agentId,
  });
  const manager = await core.makeManager({
    spec,
    concurrency: testConcurrency,
    agentId,
    logger,
    core,
    type: 'ufg',
  });

  const settings = {
    proxy: config.proxy,
    serverUrl: config.serverUrl,
    apiKey: config.apiKey,
    agentId,
  };
  const [error, account] = await presult(core.getAccountInfo({settings, logger}));

  if (error && error.message && error.message.includes('Unauthorized(401)')) {
    const failMsg = 'Incorrect API Key';
    logger.log(failMsg);
    await browser.close();
    clearTimeout(memoryTimeout);
    throw new Error(failMsg);
  }
  const client = await makeUFGClient({
    config: {
      ...account.ufg,
      ...account,
      proxy,
      concurrency: testConcurrency,
    },
    logger,
  });

  const initPage = makeInitPage({
    iframeUrl,
    config,
    browser,
    logger,
    getTransitiongIntoIE,
    getRenderIE,
  });
  const pagePool = createPagePool({initPage, logger});

  const doTakeDomSnapshots = async ({page, renderers, layoutBreakpoints, waitBeforeCapture}) => {
    const driver = await new Driver({spec, driver: page, logger}).init();
    const skipResources = client.getCachedResourceUrls();
    const result = await takeDomSnapshots({
      logger,
      driver,
      settings: {
        layoutBreakpoints:
          layoutBreakpoints !== undefined ? layoutBreakpoints : config.layoutBreakpoints,
        renderers,
        waitBeforeCapture,
        skipResources,
        disableBrowserFetching: !!config.disableBrowserFetchin,
      },
      provides: {
        getChromeEmulationDevices: client.getChromeEmulationDevices,
        getIOSDevices: client.getIOSDevices,
      },
    });
    return result;
  };

  logger.log('got script for processPage');
  browserLog({
    page,
    onLog: text => {
      logger.log(`master tab: ${text}`);
    },
  });
  try {
    const [stories] = await Promise.all(
      [getStoriesWithSpinner()].concat(
        new Array(CONCURRENT_PAGES).fill().map(async () => {
          const {pageId} = await pagePool.createPage();
          pagePool.addToPool(pageId);
        }),
      ),
    );

    const filteredStories = filterStories({stories, config});
    const storiesIncludingVariations = addVariationStories({
      stories: filteredStories,
      config,
    });

    logger.log(`starting to run ${storiesIncludingVariations.length} stories`);

    const getStoryData = makeGetStoryData({
      logger,
      takeDomSnapshots: doTakeDomSnapshots,
      waitBeforeCapture,
    });
    const closeSettings = {
      ...settings,
      updateBaselineIfNew: config.saveNewTests,
      updateBaselineIfDifferent: config.saveFailedTests,
    };
    const renderStory = makeRenderStory({
      logger: logger.extend({label: 'renderStory'}),
      openEyes: manager.openEyes,
      performance,
      timeItAsync,
      reloadPagePerStory,
      storyDataGap: config.storyDataGap,
      concurrency: testConcurrency,
      appName: config.appName,
      closeSettings,
      serverSettings: settings,
    });

    const renderStories = makeRenderStories({
      getStoryData,
      renderStory,
      getClientAPI,
      storybookUrl,
      logger,
      stream: outputStream,
      pagePool,
    });

    logger.log('finished creating functions');
    const configs = config.fakeIE ? splitConfigsByBrowser(config) : [config];
    const [error, results] = await presult(
      executeRenders({
        renderStories,
        setRenderIE,
        setTransitioningIntoIE,
        configs,
        stories: storiesIncludingVariations,
        pagePool,
        logger,
        timeItAsync,
      }),
    );
    const [errorCloseManager, testResultsSummary] = await presult(
      manager.closeManager({throwErr: false}),
    );

    if (errorCloseManager) {
      logger.log('failed to close manager', errorCloseManager);
    }

    if (error) {
      const msg = refineErrorMessage({prefix: 'Error in executeRenders:', error});
      logger.log(error);
      throw new Error(msg);
    } else {
      return {summary: testResultsSummary, results};
    }
  } finally {
    logger.log('total time: ', performance['renderStories']);
    logger.log('perf results', performance);
    await browser.close();
    clearTimeout(memoryTimeout);
  }

  async function getStoriesWithSpinner() {
    let hasConsoleErr;
    page.on('console', msg => {
      hasConsoleErr =
        msg.args()[0] &&
        msg.args()[0]._remoteObject &&
        msg.args()[0]._remoteObject.subtype === 'error';
    });

    logger.log('Getting stories from storybook');
    const spinner = ora({text: 'Reading stories', stream: outputStream});
    spinner.start();
    logger.log('navigating to storybook url:', storybookUrl);
    const [navigateErr] = await presult(page.goto(storybookUrl, {timeout: readStoriesTimeout}));
    if (navigateErr) {
      logger.log('Error when loading storybook', navigateErr);
      const failMsg = refineErrorMessage({
        prefix: 'Error when loading storybook.',
        error: navigateErr,
      });
      spinner.fail(failMsg);
      throw new Error();
    }

    const [getStoriesErr, stories] = await readStoriesWithRetry(MAX_RETRIES);

    if (getStoriesErr) {
      logger.log('Error in getStories:', getStoriesErr);
      const failMsg = refineErrorMessage({
        prefix: 'Error when reading stories:',
        error: getStoriesErr,
      });
      spinner.fail(failMsg);
      throw new Error();
    }

    if (!stories.length && hasConsoleErr) {
      return [
        new Error(
          'Could not load stories, make sure your storybook renders correctly. Perhaps no stories were rendered?',
        ),
      ];
    }

    const badParamsError = stories
      .map(s => s.error)
      .filter(Boolean)
      .join('\n');
    if (badParamsError) {
      console.log(chalk.red(`\n${badParamsError}`));
    }

    spinner.succeed();
    logger.log(`got ${stories.length} stories:`, JSON.stringify(stories));
    return stories;
  }

  function takeMemLoop() {
    logger.log(memoryLog(process.memoryUsage()));
    memoryTimeout = setTimeout(takeMemLoop, 30000);
  }

  function getRenderIE() {
    return renderIE;
  }

  function setRenderIE(value) {
    renderIE = value;
  }

  function setTransitioningIntoIE(value) {
    transitioning = value;
  }

  function getTransitiongIntoIE() {
    return transitioning;
  }

  async function readStoriesWithRetry(remainingRetries) {
    const [getStoriesErr, stories] = await presult(
      page.evaluate(getStories, {timeout: readStoriesTimeout}),
    );
    if (getStoriesErr || stories.length > 0 || remainingRetries == 0) {
      return [getStoriesErr, stories];
    } else {
      logger.log(`Got 0 stories, retrying to read stories... ${remainingRetries - 1} are left`);
      await delay(RETRY_INTERVAL);
      return await readStoriesWithRetry(remainingRetries - 1);
    }
  }
}

module.exports = eyesStorybook;
