# next-gm-store-engine
> Store engin for tampermonkey GM_storage.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-gm-store-engine
```

## apis
| api        | params      | description                 |
| ---------- | ----------- | --------------------------- |
| setItem    | (key,value) | Set vlaue by key.           |
| getItem    | (key)       | Get value by key.           |
| removeItem | (key)       | Remove a item from storage. |
| clear      | -           | Clear the storage.          |

## usage
```js
import NxGmStoreEngine from '@jswork/next-gm-store-engine';

// Must be grant:

// @grant GM_deleteValue
// @grant GM_listValues
// @grant GM_setValue
// @grant GM_getValue


// basic usage:
NxGmStoreEngine.setItem('afei', 'feizheng');
NxGmStoreEngine.getItem('afei');
NxGmStoreEngine.removeItem('afei');
NxGmStoreEngine.clear();
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-gm-store-engine/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-gm-store-engine
[version-url]: https://npmjs.org/package/@jswork/next-gm-store-engine

[license-image]: https://img.shields.io/npm/l/@jswork/next-gm-store-engine
[license-url]: https://github.com/afeiship/next-gm-store-engine/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-gm-store-engine
[size-url]: https://github.com/afeiship/next-gm-store-engine/blob/master/dist/next-gm-store-engine.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-gm-store-engine
[download-url]: https://www.npmjs.com/package/@jswork/next-gm-store-engine
