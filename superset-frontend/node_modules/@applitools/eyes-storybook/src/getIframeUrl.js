'use strict';
const {URL} = require('url');

function getIframeUrl(baseUrl) {
  const {origin, pathname, search} = new URL(baseUrl);
  const searchParam = search && search.replace(/^\?/, '&');

  let baseUrlFixed = `${origin}${pathname.replace(/\/[^\/]+\.html/, '')}`;

  if (!/\/$/.test(baseUrlFixed)) {
    baseUrlFixed += '/';
  }

  const url = new URL(
    `iframe.html?eyes-storybook=true${searchParam ? searchParam : ''}`,
    baseUrlFixed,
  );
  return url.href;
}

module.exports = getIframeUrl;
