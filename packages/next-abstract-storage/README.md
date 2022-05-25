# next-abstract-storage
> An abstract storage based on next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-abstract-storage
```

## apis
| api   | args        | description              |
| ----- | ----------- | ------------------------ |
| get   | key         | Get value by key.        |
| gets  | [key1,key2] | Get values by keys.      |
| set   | key,value   | Set key/value.           |
| sets  | obj         | Set multiple key/values. |
| del   | key         | Delete value by key.     |
| dels  | [key1,key2] | Delete multiple values.  |
| clear | -           | Clear the store.         |

## implementation:
- [next-local-storage](https://github.com/afeiship/next-local-storage)
- [next-session-storage](https://github.com/afeiship/next-session-storage)
- [next-weapp-storage](https://github.com/afeiship/next-weapp-storage)
- [next-gm-storage](https://github.com/afeiship/next-gm-storage)

## usage
```js
import '@jswork/next-abstract-storage';

const _local = new nx.AbstractStorage({
  engine: localStorage,
  prefix: 'my'
});
_local.set('test1', 'test1Value');
_local.sets({
  fei: 'test',
  age: 108,
  items: [
    {
      son: 'feifei',
      age: 0
    }
  ]
});

document.querySelector('#all').innerHTML = JSON.stringify(
  _local.gets(),
  null,
  2
);

document.querySelector('#somekeys').innerHTML = JSON.stringify(
  _local.gets(['fei', 'age']),
  null,
  2
);

document.querySelector('#btn2').onclick = function() {
  _local.empty();
  document.querySelector('#cleard').innerHTML = 'ALL HAS EMPTY!';
};

console.log(_local.get('test1'));
console.log(_local.gets());
console.log(_local.gets(['fei', 'age']));
```

## resources
- https://www.npmjs.com/package/jest-localstorage-mock
- https://stackoverflow.com/questions/11485420/how-to-mock-localstorage-in-javascript-unit-tests


## license
Code released under [the MIT license](https://github.com/afeiship/next-abstract-storage/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-abstract-storage
[version-url]: https://npmjs.org/package/@jswork/next-abstract-storage

[license-image]: https://img.shields.io/npm/l/@jswork/next-abstract-storage
[license-url]: https://github.com/afeiship/next-abstract-storage/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-abstract-storage
[size-url]: https://github.com/afeiship/next-abstract-storage/blob/master/dist/next-abstract-storage.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-abstract-storage
[download-url]: https://www.npmjs.com/package/@jswork/next-abstract-storage
