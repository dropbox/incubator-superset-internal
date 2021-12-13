var wildcard = require('wildcard');
var getNoProxyList = require('./no-proxy-list');

module.exports = function noProxy(hostname) {
  var hn = String(hostname || '').toLowerCase();
  return !!getNoProxyList().filter(function(match){
    return wildcard(match, hn);
  }).length;
}
