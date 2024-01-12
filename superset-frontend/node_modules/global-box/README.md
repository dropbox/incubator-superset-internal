# global-box

[![Version](https://img.shields.io/npm/v/global-box.svg?style=flat)](https://img.shields.io/npm/v/global-box.svg?style=flat)
[![David (path)](https://img.shields.io/david/kristw/registry.svg?path=packages%2Fglobal-box&style=flat-square)](https://david-dm.org/kristw/registry?path=packages/global-box)
[![TypeScript](https://badges.frapsoft.com/typescript/awesome/typescript.png?v=101)](https://github.com/ellerbrock/typescript-badges/)

This package will never have breaking change and keeps everything simple and backward-compatible.

> A simple key-value store singleton.

Sometimes you have to do horrible things, like use the global object to share a singleton or some values.

Instead of attaching values to the global object, which can lead to security concerns, this `global-box` package provides a key-value `store` which is guaranteed to be a singleton, so you can use it instead of the global object. Only code that are part of the same application bundle can access this `store`, making it more secured.

### Example

package A

```ts
import { globalBox } from 'global-box';
const box = globalBox();
box.set('share.config.something', 123);
```

package B

```ts
import { globalBox } from 'global-box';
const box = globalBox();
box.get('share.config.something'); // 123;
```

### Installation

For this to work correctly, **there must be only a single copy** of `global-box` in `node_modules` at all times. (Similar to how there must be only a single copy of `react`.)

Note: This package will never have breaking change and keeps everything simple and backward-compatible.

* For application developers, just do a regular installation. If you want to use `global-box` directly, or have some libraries that depends on it.

```sh
npm install global-box
```

* For library authors, you must always list this as `peerDependencies` in `package.json`. Listing it as `dependencies` may cause the library consumers to have duplicates in the final application.

In library

```json
{
  "peerDependencies": {
    "global-box": "*"
  },
  "devDependencies": {
    "global-box": "x.x"
  }
}
```

vs. in application

```json
{
  "dependencies": {
    "global-box": "x.x"
  }
}
```

### Available functions

```ts
import { globalBox } from 'global-box';
const box = globalBox();
box.has(globalId);
box.get<string>(globalId); // must specify value type via generic
box.getOrCreate(globalId, factory);
box.remove(globalId);
box.set(globalId);
```

### Credits

Inspired by [global-cache](https://github.com/ljharb/global-cache)

### License

Apache-2.0
