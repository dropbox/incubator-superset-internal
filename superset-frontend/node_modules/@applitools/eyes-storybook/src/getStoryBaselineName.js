'use strict';
const getStoryTitle = require('./getStoryTitle');

function getStoryBaselineName({name, kind, parameters}) {
  const storyTitle = getStoryTitle({name, kind, parameters});
  const queryParams = parameters && parameters.eyes && parameters.eyes.queryParams;
  if (!queryParams) return storyTitle;
  const customQueryParams = {...queryParams};
  delete customQueryParams['eyes-variation'];
  if (Object.keys(customQueryParams).length === 0) return storyTitle;

  const queryParamsString = Object.entries(customQueryParams)
    .map(([name, value]) => `${name}=${value}`)
    .join('&');

  return `${storyTitle} [${queryParamsString}]`;
}

module.exports = getStoryBaselineName;
