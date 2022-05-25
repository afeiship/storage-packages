(function () {
  const NxAbstractStorage = require('../src');
  const store = new NxAbstractStorage({
    engine: localStorage,
    prefix: 'my'
  });

  describe('NxAbstractStorage.methods', function () {
    test('test method set', () => {
      store.set('k1', 'value1');
      store.set('k2', { name: 233 });

      var k1 = JSON.parse(localStorage.getItem('my@k1'));
      var k2 = JSON.parse(localStorage.getItem('my@k2'));
      // console.log(store.keys(), store.__keys());
      expect(k1).toBe('value1');
      expect(k2).toEqual({ name: 233 });
    });

    test('test method get', () => {
      store.set('k1', 'value1');
      store.set('k2', { name: 233 });

      var k1 = store.get('k1');
      var k2 = store.get('k2');

      expect(k1).toBe('value1');
      expect(k2).toEqual({ name: 233 });
    });

    test('test method sets/gets', () => {
      store.sets({
        name: 'bj',
        cn: '北京'
      });

      var rs = store.gets();

      expect(rs).toEqual({ k1: 'value1', k2: { name: 233 }, name: 'bj', cn: '北京' });
    });

    test('test method clear', () => {
      store.del('cn');

      var rs = store.gets();

      expect(rs).toEqual({ k1: 'value1', k2: { name: 233 }, name: 'bj' });
    });

    test('test method clears', () => {
      store.dels(['name', 'k1']);
      var rs = store.gets();
      expect(rs).toEqual({ k2: { name: 233 } });
    });

    test('test method empty', () => {
      store.clear();
      var rs = store.gets();
      expect(rs).toEqual({});
    });

    test('test set/get with path', () => {
      store.set('k3.b.c', 'b-c-vlaue');
      store.set('kf.0.test', { name: 'fei' });
      expect(store.get('k3.b.c')).toBe('b-c-vlaue');
      expect(store.get('k3.b.d')).toBeUndefined();
      expect(store.get('kf.0.test')).toEqual({ name: 'fei' });
      expect(store.get('kf.0.test.name')).toBe('fei');
      // console.log(store.gets());
    });
  });
})();
