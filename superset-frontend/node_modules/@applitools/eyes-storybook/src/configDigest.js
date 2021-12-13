'use strict';
const utils = require('@applitools/utils');
const prettyValue = (key, val) =>
  !utils.types.isObject(val, {name: key}) ? val : JSON.stringify(val);

function configDigest(config) {
  const maxKeyLen = Object.keys(config).reduce((len, key) => Math.max(len, key.length), 0);
  return (
    Object.entries(config)
      .map(([key, value]) => `${key.padEnd(maxKeyLen + 1)}: ${prettyValue(key, value)}`)
      .join('\n') + '\n'
  );
}

module.exports = configDigest;
