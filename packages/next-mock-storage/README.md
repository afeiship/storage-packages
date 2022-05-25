# next-mock-storage
> Mock storage for mock storage api based on next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-mock-storage
```

## apis
| api        | params | description                      |
| ---------- | ------ | -------------------------------- |
| setItem    | -      | -                                |
| getItem    | -      | -                                |
| removeItem | -      | -                                |
| clear      | -      | -                                |
| keys       | -      | Extend, not default storage api. |
| _storage   | -      | For test.                        |

## usage
```js
import NxMockStorage from '@jswork/next-mock-storage';

const mockStorage = NxMockStorage.getInstance();
mockStorage.setItem('k1', 'v1');
mockStorage.setItem('k2', 'v2');
mockStorage.setItem('k3', 'v3');
mockStorage.removeItem('k3');
mockStorage.getItem('k3');  // null
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-mock-storage/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-mock-storage
[version-url]: https://npmjs.org/package/@jswork/next-mock-storage

[license-image]: https://img.shields.io/npm/l/@jswork/next-mock-storage
[license-url]: https://github.com/afeiship/next-mock-storage/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-mock-storage
[size-url]: https://github.com/afeiship/next-mock-storage/blob/master/dist/next-mock-storage.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-mock-storage
[download-url]: https://www.npmjs.com/package/@jswork/next-mock-storage
