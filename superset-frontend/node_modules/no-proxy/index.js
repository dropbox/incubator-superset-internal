var URL = require('./url');
var noProxyHost = require('./hostname');

module.exports = function noProxy(resource) {
  var url = new URL(resource);
  return noProxyHost(url.host);
}
