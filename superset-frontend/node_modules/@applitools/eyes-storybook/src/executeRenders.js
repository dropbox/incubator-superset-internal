const {shouldRenderIE} = require('./shouldRenderIE');

async function executeRenders({
  timeItAsync,
  setTransitioningIntoIE,
  renderStories,
  configs,
  pagePool,
  stories,
  logger,
  setRenderIE,
}) {
  const results = [];
  for (const config of configs) {
    logger.verbose(`executing render story with ${JSON.stringify(config)}`);
    if (shouldRenderIE(config)) {
      setRenderIE(true);
      setTransitioningIntoIE(true);
      await pagePool.drain();
      setTransitioningIntoIE(false);
    }

    const result = await timeItAsync('renderStories', () => renderStories(stories, config));

    results.push(...result);
  }

  return results;
}

module.exports = executeRenders;
