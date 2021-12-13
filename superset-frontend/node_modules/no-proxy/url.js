module.exports = (function(){
  try {
    // use already set global if available
    if (global.URL) {
      return global.URL;
    }

    // Node 8+
    return require('url').URL;
  } catch(err) {
    // Node < 8
    return require('url-parse');
  }
}());
