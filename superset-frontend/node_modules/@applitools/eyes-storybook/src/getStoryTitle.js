'use strict';

function getStoryTitle({name, kind, parameters}) {
  const queryParams = (parameters && parameters.eyes && parameters.eyes.queryParams) || {};
  const eyesVariation = queryParams['eyes-variation'];

  return `${kind}: ${name}${eyesVariation ? ` [${eyesVariation}]` : ''}`;
}

module.exports = getStoryTitle;
