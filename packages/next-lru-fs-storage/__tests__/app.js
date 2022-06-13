const NxLruFsStorage = require('../src')

const lruStore = new NxLruFsStorage();

// lruStore.set('foo', 1)
console.log(lruStore.gets())
