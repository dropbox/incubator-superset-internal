# no-proxy

Test URL against `NO_PROXY` environment variable.


```js
console.log(process.env.NO_PROXY); // ".foo.com,*.bar.com,10.*,192.168.1."

// requires protocol
var noProxy = require('no-proxy');
noProxy('http://foo.com/'); // true
noProxy('http://www.baz.com/'); // false

// check hostname part only
var noProxyHost = require('no-proxy/hostname');
noProxyHost('foo.com'); // true
noProxyHost('baz.com'); // false
noProxyHost('192.168.1.1'); // true
```

NOTE: You may want to use memoization around this module.

#### WARNING

If you are using a node version prior to Node 8, you need to install [`url-parse`](https://www.npmjs.com/package/url-parse) as a dependency.
