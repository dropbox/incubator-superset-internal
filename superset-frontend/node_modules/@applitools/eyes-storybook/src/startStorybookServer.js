'use strict';
const {resolve} = require('path');
const ora = require('ora');
const StorybookConnector = require('./storybookConnector');

async function startStorybookServer({
  packagePath,
  storybookPort,
  storybookHost,
  storybookConfigDir,
  storybookStaticDir,
  showStorybookOutput,
  logger,
  startStorybookServerTimeout,
}) {
  const isWindows = process.platform.startsWith('win');
  const storybookPath = resolve(packagePath, 'node_modules/.bin/start-storybook');

  const storybookConnector = new StorybookConnector({
    storybookPath,
    storybookPort,
    storybookHost,
    storybookConfigDir,
    storybookStaticDir,
    isWindows,
    logger,
  });

  if (showStorybookOutput) {
    storybookConnector.on('stderr', str => console.error('start-storybook (stderr):', str));
    storybookConnector.on('stdout', str => console.log('start-storybook (stdout):', str));
  }
  storybookConnector.on('failure', () => {
    spinner.fail('Failed to start storybook server');
    process.exit(1);
  });

  process.on('exit', () => storybookConnector.kill());
  process.on('SIGINT', () => process.exit());
  process.on('SIGTERM', () => process.exit());
  process.on('uncaughtException', () => process.exit(1));

  const spinner = ora('Starting storybook server');
  spinner.start();

  try {
    await storybookConnector.start(startStorybookServerTimeout * 1000);
  } catch (error) {
    spinner.fail(error);
    process.exit(1);
  }
  spinner.succeed('Storybook was started');

  return `http://${storybookHost}:${storybookPort}`;
}

module.exports = startStorybookServer;
