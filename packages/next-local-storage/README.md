# next-local-storage
> LocalStorage based on next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-local-storage
```

## apis
- https://github.com/afeiship/next-abstract-storage

## usage
```js
import NxLocalStorage from '@jswork/next-local-storage';

const store = new nx.NxLocalStorage('tt');
store.set('test1', 1234);
console.log( store.gets() );
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-local-storage/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-local-storage
[version-url]: https://npmjs.org/package/@jswork/next-local-storage

[license-image]: https://img.shields.io/npm/l/@jswork/next-local-storage
[license-url]: https://github.com/afeiship/next-local-storage/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-local-storage
[size-url]: https://github.com/afeiship/next-local-storage/blob/master/dist/next-local-storage.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-local-storage
[download-url]: https://www.npmjs.com/package/@jswork/next-local-storage
