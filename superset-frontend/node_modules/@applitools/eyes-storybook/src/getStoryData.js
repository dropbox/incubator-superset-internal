'use strict';
const {presult, ptimeoutWithError} = require('@applitools/functional-commons');
const renderStoryWithClientAPI = require('../dist/renderStoryWithClientAPI');
const runRunBeforeScript = require('../dist/runRunBeforeScript');
const getStoryBaselineName = require('./getStoryBaselineName');
const {URL} = require('url');
const runRunAfterScript = require('../dist/runRunAfterScript');
const waitFor = require('./waitFor');
const PAGE_EVALUATE_TIMEOUT = 120000;
const DOM_SNAPSHOTS_TIMEOUT = 5 * 60 * 1000;
const utils = require('@applitools/utils');

function makeGetStoryData({logger, takeDomSnapshots, waitBeforeCapture, reloadPagePerStory}) {
  return async function getStoryData({story, storyUrl, page, renderers, waitBeforeStory}) {
    const title = getStoryBaselineName(story);
    logger.log(`getting data from story`, title);

    const eyesParameters = story.parameters && story.parameters.eyes;
    if (story.isApi && !reloadPagePerStory) {
      const currentUrl = page.url();
      const expectedQueryParams = eyesParameters ? eyesParameters.queryParams : undefined;
      if (urlQueryParamsEquals(currentUrl, expectedQueryParams)) {
        try {
          const err = await ptimeoutWithError(
            page.evaluate(renderStoryWithClientAPI, story.index, story.id),
            PAGE_EVALUATE_TIMEOUT,
            new Error('page evaluate timed out!'),
          );
          logger.log(`[story data] done with page evaluate for story ${title}`);
          err && handleRenderStoryError(err);
        } catch (ex) {
          if (ex.message && !ex.message.includes('Eyes could not render stories properly'))
            handleRenderStoryError(ex);
          else {
            const errMsg = ex.message || ex;
            throw new Error(errMsg);
          }
        }
      } else {
        await renderStoryLegacy();
      }
    } else {
      await renderStoryLegacy();
    }

    const wait = waitBeforeStory || waitBeforeCapture;
    if (typeof wait === 'number') {
      utils.guard.isGreaterThenOrEqual(wait, 0, {name: 'waitBeforeCapture'});
    }

    if (eyesParameters && eyesParameters.runBefore) {
      await page.evaluate(runRunBeforeScript, story.index).catch(err => {
        logger.log(`error during runBefore: ${err}`); // it might be good to aggregate these errors and output them at the end of the run
      });
    }

    logger.log(`running takeDomSnapshot(s) for story ${title}`);
    const domSnapshotsPromise = takeDomSnapshots({
      page,
      renderers,
      layoutBreakpoints: eyesParameters ? eyesParameters.layoutBreakpoints : undefined,
      waitBeforeCapture: wait
        ? async () => {
            logger.log(`waiting before screenshot of ${title} ${wait}`);
            await waitFor(page, wait);
          }
        : undefined,
    });

    const result = await ptimeoutWithError(
      domSnapshotsPromise,
      DOM_SNAPSHOTS_TIMEOUT,
      new Error(`timeout reached when trying to take DOM for story ${title}`),
    );

    logger.log(`done getting DOM for story ${title}`);

    if (eyesParameters && eyesParameters.runAfter) {
      await page.evaluate(runRunAfterScript, story.index).catch(err => {
        logger.log(`error during runAfter: ${err}`);
      });
    }

    logger.log(`done getting data from story`, title);
    return result;

    async function renderStoryLegacy() {
      logger.log(`getting data from story ${storyUrl}`);
      const [err] = await presult(page.goto(storyUrl, {timeout: 10000}));
      if (err) {
        logger.log(`error navigating to story ${storyUrl}`, err);
        throw err;
      }
    }

    function urlQueryParamsEquals(url, expectedQueryParams) {
      try {
        url = new URL(url);
      } catch (err) {
        logger.error('Error during parsing page url', err);
        return false;
      }

      const currentQueryParams = url.searchParams.get('eyes-query-params');
      if (!currentQueryParams && !expectedQueryParams) return true;
      if (!currentQueryParams || !expectedQueryParams) return false;

      const expectedQueryParamNames = Object.keys(expectedQueryParams);
      const currentQueryParamNames = currentQueryParams.split(',');

      if (currentQueryParamNames.length !== expectedQueryParamNames.length) return false;

      for (const queryParamName of currentQueryParamNames) {
        if (url.searchParams.get(queryParamName) !== expectedQueryParams[queryParamName]) {
          return false;
        }
      }
      return true;
    }

    // TODO (amit): handle this error in the caller (probably renderStories)
    function handleRenderStoryError(error) {
      logger.log(error.message);
      const versionMsg = error.version
        ? ` The detected version of storybook is ${error.version}.`
        : '';
      throw new Error(
        `Eyes could not render stories properly.${versionMsg} Contact support@applitools.com for troubleshooting.`,
      );
    }
  };
}

module.exports = makeGetStoryData;
