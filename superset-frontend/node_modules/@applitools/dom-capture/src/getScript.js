'use strict';
const fs = require('fs');
const {promisify: p} = require('util');
const {cacheFunctionAsync} = require('@applitools/functional-commons');

const makeGetScript = filename =>
  cacheFunctionAsync(async function() {
    return await p(fs.readFile)(__dirname + `/../dist/${filename}.js`, 'utf-8');
  });

module.exports = makeGetScript;
