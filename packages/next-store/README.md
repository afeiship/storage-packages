# next-store
> Storage for weapp based on next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-store
```

## apis
| api    | params         | default | description                           |
| ------ | -------------- | ------- | ------------------------------------- |
| $      | (name, purify) | -       | Select local/session engine instance. |
| config | (options)      | -       | Select local/session engine instance. |


## usage
```js
import NxStore from '@jswork/next-store';

// init with namespace(prefix)
const store = new NxStore({ prefix:'abc', purify: true });

// set
store.local = { name:'nx', github:'afeiship', items:['next','gem','nx']}

// get
const { name } = store.local;

// get/gets/set/sets/del/dels/clear
store.$('local').del('nx');
store.$('local', true).del('xxx');

store.config({ prefix:'myprefix'})
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-store/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-store
[version-url]: https://npmjs.org/package/@jswork/next-store

[license-image]: https://img.shields.io/npm/l/@jswork/next-store
[license-url]: https://github.com/afeiship/next-store/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-store
[size-url]: https://github.com/afeiship/next-store/blob/master/dist/next-store.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-store
[download-url]: https://www.npmjs.com/package/@jswork/next-store
