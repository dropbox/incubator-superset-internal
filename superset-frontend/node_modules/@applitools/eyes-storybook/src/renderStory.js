'use strict';
const getStoryTitle = require('./getStoryTitle');
const getStoryBaselineName = require('./getStoryBaselineName');
const {deprecationWarning} = require('./errMessages');
const throat = require('throat');

function makeRenderStory({
  logger,
  openEyes,
  performance,
  timeItAsync,
  storyDataGap,
  appName,
  closeSettings,
  serverSettings,
}) {
  const throttle = throat(storyDataGap);
  return function renderStory({config, story, snapshots, url}) {
    const {name, kind, parameters, hasPlayFunction} = story;
    const baselineName = getStoryBaselineName({name, kind, parameters});
    const title = getStoryTitle({name, kind, parameters});
    const eyesParameters = (parameters && parameters.eyes) || {};
    const eyesOptions = {
      ...config,
      ...eyesParameters,
      properties: [...(config.properties || []), ...(eyesParameters.properties || [])],
    };
    const {
      ignoreDisplacements,
      ignoreRegions,
      accessibilityRegions,
      floatingRegions,
      strictRegions,
      contentRegions,
      layoutRegions,
      scriptHooks,
      sizeMode,
      target,
      fully,
      selector,
      region,
      tag,
      properties,
      ignore,
      accessibilityValidation,
      sendDom,
      visualGridOptions,
      useDom,
      enablePatterns,
      renderers,
      keepBatchOpen,
      batch,
      branchName,
      parentBranchName,
      baselineBranchName,
      compareWithParentBranch,
      ignoreGitMergeBase,
      baselineEnvName,
      envName,
      ignoreCaret,
      matchLevel,
      ignoreBaseline,
    } = eyesOptions;

    if (sizeMode) {
      console.log(deprecationWarning({deprecatedThing: "'sizeMode'", newThing: "'target'"}));
    }

    let ignoreRegionsBackCompat = ignoreRegions;
    if (ignore && ignoreRegions === undefined) {
      console.log(deprecationWarning({deprecatedThing: "'ignore'", newThing: "'ignoreRegions'"}));
      ignoreRegionsBackCompat = ignore;
    }

    logger.log(`running story ${title} with baseline ${baselineName}`);

    const storyProperties = [
      {name: 'Component name', value: kind},
      {name: 'State', value: name},
      ...(properties || []),
    ];
    if (hasPlayFunction) {
      storyProperties.push({name: 'Storybook play function', value: 'true'});
    }

    const openParams = {
      testName: baselineName,
      displayName: title,
      properties: storyProperties,
      appName,
      keepBatchOpen,
      batch,
      branchName,
      parentBranchName,
      baselineBranchName,
      compareWithParentBranch,
      ignoreGitBranching: ignoreGitMergeBase,
      baselineEnvName,
      environmentName: envName,
      ignoreBaseline,
      ...serverSettings,
    };
    const checkParams = {
      url,
      ignoreRegions: ignoreRegionsBackCompat,
      floatingRegions: mapFloatingRegions(floatingRegions),
      layoutRegions,
      strictRegions,
      contentRegions,
      accessibilityRegions: mapAccessibilityRegions(accessibilityRegions),
      renderers,
      hooks: scriptHooks,
      sizeMode,
      target,
      fully,
      selector,
      region,
      tag,
      sendDom,
      ufgOptions: visualGridOptions,
      useDom,
      enablePatterns,
      ignoreDisplacements,
      fully,
      ignoreCaret,
      matchLevel,
      accessibilitySettings: accessibilityValidation
        ? {
            level: accessibilityValidation ? accessibilityValidation.level : undefined,
            version: accessibilityValidation
              ? accessibilityValidation.guidelinesVersion
              : undefined,
          }
        : undefined,
    };

    function mapAccessibilityRegions(accessabilityRegions) {
      if (!accessabilityRegions) return;
      if (!Array.isArray(accessabilityRegions)) accessabilityRegions = [accessabilityRegions];
      return accessabilityRegions.map(region => {
        const res = {
          type: region.accessibilityType,
        };
        if (region.selector) {
          res.region = region.selector;
        } else if (region.region && isRegion(region.region)) {
          res.region = {
            y: region.region.top,
            x: region.region.left,
            width: region.region.width,
            height: region.region.height,
          };
        } else {
          return;
        }
        return res;
      });
    }

    function mapFloatingRegions(floatingRegions) {
      if (!floatingRegions) return;
      if (!Array.isArray(floatingRegions)) floatingRegions = [floatingRegions];
      return floatingRegions.map(region => {
        let res = {
          offset: {
            bottom: region.maxDownOffset || 0,
            left: region.maxLeftOffset || 0,
            top: region.maxUpOffset || 0,
            right: region.maxRightOffset || 0,
          },
        };
        if (region.selector) {
          res.region = region.selector;
        } else if (region.region && isRegion(region.region)) {
          res.region = {
            y: region.region.top,
            x: region.region.left,
            width: region.region.width,
            height: region.region.height,
          };
        } else {
          return;
        }
        return res;
      });
    }

    function isRegion(region) {
      if (
        region.hasOwnProperty('top') &&
        region.hasOwnProperty('left') &&
        region.hasOwnProperty('width') &&
        region.hasOwnProperty('height')
      ) {
        return true;
      }
    }

    return timeItAsync(baselineName, async () => {
      const {checkAndClose} = await openEyes({settings: openParams});
      return new Promise((resolve, reject) => {
        throttle(async () => {
          try {
            const checkResults = await checkAndClose({
              settings: {...checkParams, ...closeSettings, throwEx: false},
              target: snapshots,
            });
            resolve(checkResults);
          } catch (ex) {
            reject(ex);
          }
        });
      });
    }).then(onDoneStory);

    function onDoneStory(results) {
      logger.log('finished story', baselineName, 'in', performance[baselineName]);
      return results;
    }
  };
}

module.exports = makeRenderStory;
