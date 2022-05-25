# next-session-storage
> SessionStorage based on next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-session-storage
```


## usage
```js
import NxSessionStorage from '@jswork/next-session-storage';

const _session = new nx.SessionStorage('ts');
_session.set('myseesion1','svalue1');

console.log(_session.gets());
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-session-storage/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-session-storage
[version-url]: https://npmjs.org/package/@jswork/next-session-storage

[license-image]: https://img.shields.io/npm/l/@jswork/next-session-storage
[license-url]: https://github.com/afeiship/next-session-storage/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-session-storage
[size-url]: https://github.com/afeiship/next-session-storage/blob/master/dist/next-session-storage.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-session-storage
[download-url]: https://www.npmjs.com/package/@jswork/next-session-storage
