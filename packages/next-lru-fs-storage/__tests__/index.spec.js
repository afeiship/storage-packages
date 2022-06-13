(function () {
  const NxLruFsStorage = require('../src');

  const lruStore = new NxLruFsStorage();

  describe('NxLruFsStorage.methods', function () {
    beforeAll(() => {
      lruStore.set('k1', 'v1');
    });

    test('method: set/get', function () {
      lruStore.set('foo', 'bar');
      expect(lruStore.get('foo')).toBe('bar');
    });

    test('method: sets/gets:', function () {
      lruStore.sets({ f1: 'barr', name: 'aric' });

      expect(lruStore.gets()).toEqual({
        k1: 'v1',
        foo: 'bar',
        f1: 'barr',
        name: 'aric'
      });
    });

    test('method: delete/clear', () => {
      expect(lruStore.get('k1')).toBe('v1');

      // del key should not exist
      lruStore.del('k1');
      expect(lruStore.gets()).toEqual({
        foo: 'bar',
        f1: 'barr',
        name: 'aric'
      });

      // clear should be empty
      lruStore.clear();
      expect(lruStore.gets()).toEqual({});
    });
  });
})();
