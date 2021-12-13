var proxyList = undefined;

function setProxyList() {
  var proxies = (process.env.NO_PROXY || '')
    .split(',')
    .map(function(m) {
      return m.trim()
        .toLowerCase()
        .replace(/\.$/, '.*')
        .replace(/^\./, '*.')
    })
    .reduce(function(a, m) {
      a.push(m);
      if ((/^\*\./).test(m)) {
        a.push(m.substr(2))
      }
      return a;
    }, [])
    .filter(function(m) {
      return m;
    });
  proxyList = proxies.length ? proxies : [];
}


module.exports = function getProxyList() {
  if (proxyList === undefined) {
    setProxyList();
  }
  return proxyList;
}