'use strict';

function addVariationStories({stories, config}) {
  const defaultStories = [];
  const variationStories = {};
  for (const story of stories) {
    const variations = getStoryVariations(story, config);
    if (variations) {
      for (const variation of variations) {
        const variationKey = stringifyVariation(variation);
        const variationStoriesArray =
          variationStories[variationKey] || (variationStories[variationKey] = []);
        const variationStory = {...story};
        if (variation.queryParams || variation.properties) {
          variationStory.parameters = addVariation(story.parameters, variation);
        }
        variationStoriesArray.push(variationStory);
      }
    } else {
      defaultStories.push(story);
    }
  }

  return Object.values(variationStories).reduce((allStories, variationStories) => {
    return allStories.concat(variationStories);
  }, defaultStories);
}

function getStoryVariations(story, config) {
  if (story.parameters && story.parameters.eyes && story.parameters.eyes.variations) {
    if (!Array.isArray(story.parameters.eyes.variations)) {
      throw new Error('variations should be an array');
    }
    return normalizeVariations(story.parameters.eyes.variations);
  }

  if (config.variations) {
    if (Array.isArray(config.variations)) {
      return normalizeVariations(config.variations);
    } else if (typeof config.variations === 'function') {
      const variations = config.variations(story);
      if (variations) {
        if (!Array.isArray(variations)) {
          throw new Error('global variations should be a function that returns array');
        }
        return normalizeVariations(variations);
      }
    } else {
      throw new Error('global variations should be an array or a function that returns array');
    }
  }
}

function normalizeVariations(variations) {
  let shouldHasDefault = false; // default variation is one without query params
  const normalizedVariations = variations.map(variation => {
    if (typeof variation === 'string') {
      shouldHasDefault = true;
      return {
        queryParams: {'eyes-variation': variation},
        properties: [{name: 'eyes-variation', value: variation}],
      };
    }
    if (variation.queryParams && (!variation.properties || variation.properties.length === 0)) {
      return {
        ...variation,
        properties: Object.entries(variation.queryParams).map(([name, value]) => ({name, value})),
      };
    }
    return variation;
  });

  // if it should has default variation and it is not already there
  if (shouldHasDefault && !normalizedVariations.some(variation => !variation.queryParams)) {
    normalizedVariations.unshift({});
  }

  return normalizedVariations;
}

function stringifyVariation(variation) {
  if (!variation.queryParams) return '';
  return Object.keys(variation.queryParams)
    .sort()
    .map(name => `${name}=${variation.queryParams[name]}`)
    .join('&');
}

function addVariation(parameters, variation) {
  parameters = {...parameters};
  parameters.eyes = {...parameters.eyes};
  if (variation.queryParams) {
    parameters.eyes.queryParams = variation.queryParams;
  }
  if (variation.properties) {
    parameters.eyes.properties = [
      ...(parameters.eyes.properties || []),
      ...(variation.properties || []),
    ];
  }
  return parameters;
}

module.exports = addVariationStories;
