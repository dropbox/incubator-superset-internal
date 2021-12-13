'use strict';
const getIframeUrl = require('./getIframeUrl');

function getStoryUrl({name, kind, parameters}, baseUrl) {
  let storyUrl = getIframeUrl(baseUrl);
  storyUrl += `&selectedKind=${encodeURIComponent(kind)}`;
  storyUrl += `&selectedStory=${encodeURIComponent(name)}`;

  const queryParams = parameters && parameters.eyes && parameters.eyes.queryParams;
  if (queryParams) {
    storyUrl += `&eyes-query-params=${Object.keys(queryParams).join(',')}`;
    for (const [name, value] of Object.entries(queryParams)) {
      storyUrl += `&${name}=${encodeURIComponent(value)}`;
    }
  }

  return storyUrl;
}

module.exports = getStoryUrl;
