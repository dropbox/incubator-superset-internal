'use strict';
const flatten = require('lodash.flatten');
const chalk = require('chalk');
const utils = require('@applitools/utils');
const uniq = require('./uniq');
const concurrencyMsg = require('./concurrencyMsg');
const {formatters} = require('@applitools/core');

function processResults({results = [], totalTime, testConcurrency, saveNewTests = true}) {
  let outputStr = '\n';
  const pluralize = utils.general.pluralize;
  let testResults = flatten(results.summary.results);
  const unresolved = testResults.filter(r => r.result.isDifferent);
  const passedOrNew = testResults.filter(r => r.result.status === 'Passed' || r.result.isNew);
  const newTests = testResults.filter(r => r.result.isNew);
  const newTestsSize = newTests.length;
  const warnForUnsavedNewTests = !!(!saveNewTests && newTestsSize);

  let errors = results.summary.results.map(result => [
    {err: result.error, title: result.result.name},
  ]);
  errors = flatten(errors).filter(
    ({err}) =>
      err &&
      !err.message.includes('detected differences') &&
      !err.message.includes('Please approve the new baseline'),
  );

  const hasResults = unresolved.length || passedOrNew.length;
  const seeDetailsStr =
    hasResults && `See details at ${(passedOrNew[0] || unresolved[0]).result.appUrls.batch}`;

  if (hasResults) {
    outputStr += `${seeDetailsStr}\n\n`;
  }

  outputStr += '[EYES: TEST RESULTS]:\n\n';
  if (passedOrNew.length > 0) {
    outputStr += testResultsOutput(passedOrNew, warnForUnsavedNewTests);
  }
  if (unresolved.length > 0) {
    outputStr += testResultsOutput(unresolved, warnForUnsavedNewTests);
  }
  if (errors.length) {
    const sortedErrors = errors.sort((a, b) => a.title.localeCompare(b.title));
    outputStr += uniq(
      sortedErrors.map(
        ({title, err}) => `${title} - ${chalk.red('Failed')} ${err.message || err.toString()}`,
      ),
    ).join('\n');
    outputStr += '\n';
  }

  if (!errors.length && !hasResults) {
    outputStr += 'Test is finished but no results returned.\n';
  }

  if (errors.length && !unresolved.length) {
    outputStr += chalk.red(
      `\nA total of ${errors.length} stor${pluralize(errors, [
        'ies',
        'y',
      ])} failed for unexpected error${pluralize(errors)}.`,
    );
  } else if (unresolved.length && !errors.length) {
    outputStr += chalk.keyword('orange')(
      `\nA total of ${unresolved.length} difference${pluralize(unresolved, [
        's were',
        ' was',
      ])} found.`,
    );
  } else if (unresolved.length || errors.length) {
    outputStr += chalk.red(
      `\nA total of ${unresolved.length} difference${pluralize(unresolved, [
        's were',
        ' was',
      ])} found and ${errors.length} stor${pluralize(errors, [
        'ies',
        'y',
      ])} failed for ${pluralize(errors, ['', 'an '])}unexpected error${pluralize(errors)}.`,
    );
  } else if (warnForUnsavedNewTests) {
    const countText =
      newTestsSize > 1
        ? `are ${newTestsSize} new tests`
        : `is a new test: '${newTests[0].result.name}'`;
    outputStr += chalk.red(
      `\n'saveNewTests' was set to false and there ${countText}. Please approve ${pluralize(
        newTestsSize,
        ['their', 'its'],
      )} baseline${pluralize(newTestsSize)} in Eyes dashboard.\n`,
    );
  } else if (passedOrNew.length) {
    outputStr += chalk.green(`\nNo differences were found!`);
  }

  if (hasResults) {
    outputStr += `\n${seeDetailsStr}\nTotal time: ${Math.round(totalTime / 1000)} seconds\n`;
  }

  if (Number(testConcurrency) === 5) {
    // TODO require from core
    outputStr += `\n${concurrencyMsg}\n`;
  }
  const formatter = formatters.toJsonOutput(results.summary);
  const exitCode =
    !warnForUnsavedNewTests && passedOrNew.length && !errors.length && !unresolved.length ? 0 : 1;
  return {
    outputStr,
    formatter,
    exitCode,
  };
}

function testResultsOutput(results, warnForUnsavedNewTests) {
  let outputStr = '';
  const sortedTestResults = results.sort((a, b) => a.result.name.localeCompare(b.result.name));
  sortedTestResults.forEach(result => {
    const storyTitle = `${result.result.name} [${result.result.hostApp}] [${result.result.hostDisplaySize.width}x${result.result.hostDisplaySize.height}] - `;

    if (result.result.isNew) {
      const newResColor = warnForUnsavedNewTests ? 'orange' : 'blue';
      outputStr += `${storyTitle}${chalk.keyword(newResColor)('New')}\n`;
    } else if (!result.result.isDifferent) {
      outputStr += `${storyTitle}${chalk.green('Passed')}\n`;
    } else {
      outputStr += `${storyTitle}${chalk.keyword('orange')(`Unresolved`)}\n`;
    }
  });
  outputStr += '\n';
  return outputStr;
}

module.exports = processResults;
