'use strict';
const getStoryUrl = require('./getStoryUrl');
const getStoryBaselineName = require('./getStoryBaselineName');
const ora = require('ora');
const {presult} = require('@applitools/functional-commons');
const {shouldRenderIE} = require('./shouldRenderIE');

function makeRenderStories({
  getStoryData,
  pagePool,
  renderStory,
  storybookUrl,
  logger,
  stream,
  getClientAPI,
  maxPageTTL = 60000,
}) {
  let newPageIdToAdd;

  return async function renderStories(stories, config) {
    let doneStories = 0;
    const allTestResults = [];
    let allStoriesPromise = Promise.resolve();
    let currIndex = 0;

    const spinner = ora({
      text: updateSpinnerText(0, stories.length),
      stream,
    });
    spinner.start();
    prepareNewPage();

    await processStoryLoop();
    await allStoriesPromise;
    updateSpinnerEnd();
    return allTestResults;

    async function processStoryLoop() {
      if (currIndex === stories.length) return;
      const {page, pageId, markPageAsFree, removePage, getCreatedAt} = await pagePool.getFreePage();
      const livedTime = Date.now() - getCreatedAt();
      logger.log(`[prepareNewPage] got free page: ${pageId}, lived time: ${livedTime}`);
      if (newPageIdToAdd && livedTime > maxPageTTL) {
        logger.log(`[prepareNewPage] replacing page ${pageId} with page ${newPageIdToAdd}`);
        removePage();
        page.close();
        pagePool.addToPool(newPageIdToAdd);
        prepareNewPage();
        return processStoryLoop();
      }
      logger.log(`[page ${pageId}] waiting for queued renders`);
      // await waitForQueuedRenders(storyDataGap);
      logger.log(`[page ${pageId}] done waiting for queued renders`);
      const storyPromise = processStory();
      allStoriesPromise = allStoriesPromise.then(() => storyPromise);
      return processStoryLoop();

      async function processStory() {
        const story = stories[currIndex++];
        const storyUrl = getStoryUrl(story, storybookUrl);
        const title = getStoryBaselineName(story);
        const {waitBeforeCapture} = (story.parameters && story.parameters.eyes) || {};

        try {
          let [error, storyData] = await presult(
            getStoryData({
              story,
              storyUrl,
              renderers: config.renderers,
              page,
              waitBeforeStory: waitBeforeCapture,
            }),
          );

          if (
            error &&
            /(Protocol error|Execution context was destroyed|timeout reached when trying to take DOM for story)/.test(
              error.message,
            )
          ) {
            logger.log(
              `Puppeteer error from [page ${pageId}] while getting story data. Replacing page. ${error.message}`,
            );
            removePage();
            page
              .close()
              .catch(e => logger.log(`stale [page ${pageId}] already closed: ${e.message}`));
            const newPageObj = await pagePool.createPage();

            logger.log(`new page ${newPageObj.pageId} created ad hoc. trying it out`);
            const [newError, newStoryData] = await presult(
              getStoryData({
                story,
                storyUrl,
                renderers: config.renderers,
                page: newPageObj.page,
                waitBeforeStory: waitBeforeCapture,
              }),
            );
            error = newError;
            storyData = newStoryData;
            pagePool.addToPool(newPageObj.pageId);
          } else {
            markPageAsFree();
          }

          if (error) {
            const errMsg = `[page ${pageId}] Failed to get story data for "${title}". ${error}`;
            logger.log(errMsg);
            throw new Error(errMsg);
          }
          const testResults = await renderStory({
            snapshots: storyData,
            url: storyUrl,
            story,
            config,
          });
          return onDoneStory(testResults, story);
        } catch (ex) {
          return onDoneStory(ex, story);
        }
      }
    }

    function didTestPass({resultsOrErr}) {
      return (
        resultsOrErr.constructor &&
        resultsOrErr.constructor.name !== 'Error' &&
        resultsOrErr.every(r => !r.isDifferent && !r.isAborted && !r.isNew)
      );
    }

    function updateSpinnerEnd() {
      allTestResults.every(didTestPass) ? spinner.succeed() : spinner.fail();
    }

    function updateSpinnerText(number, length) {
      return `Done ${number} stories out of ${length} ${shouldRenderIE(config) ? '(IE)' : ''}`;
    }

    function onDoneStory(resultsOrErr, story) {
      spinner.text = updateSpinnerText(++doneStories, stories.length);
      const title = getStoryBaselineName(story);
      allTestResults.push({title, resultsOrErr});
      return {title, resultsOrErr};
    }

    async function prepareNewPage() {
      newPageIdToAdd = null;
      logger.log('[prepareNewPage] preparing...');
      const [errorInCreate, pageObj] = await presult(pagePool.createPage());
      if (errorInCreate) {
        logger.log(
          `[prepareNewPage] error preparing new page. This is probably a fatal problem. ${errorInCreate}`,
        );
        return;
      }

      const {pageId, page} = pageObj;
      logger.log(`[prepareNewPage] new page is ready: ${pageId}`);
      const [errorInSanity] = await presult(page.evaluate(getClientAPI));
      if (errorInSanity) {
        logger.log(
          `[prepareNewPage] new page ${pageId} is corrupted. preparing new page. ${errorInSanity}`,
        );
        prepareNewPage();
        return;
      }

      logger.log(`[prepareNewPage] setting new page for replacement: ${pageId}`);

      newPageIdToAdd = pageId;
    }
  };
}

module.exports = makeRenderStories;
