(function () {
  const NxStore = require('../src');

  describe('NxStore.methods', function () {
    test('init with prefix/purify should have 4 instances', function () {
      var store = new NxStore({ prefix: 'abc', purify: true });
      expect(typeof store._localStorage === 'object').toBe(true);
      expect(typeof store._sessionStorage === 'object').toBe(true);
      expect(typeof store.localStorage === 'object').toBe(true);
      expect(typeof store.sessionStorage === 'object').toBe(true);
    });

    test('init with prefix/no-purify should have 2 instances', function () {
      var store = new NxStore({ prefix: 'abc' });
      expect(typeof store._localStorage === 'object').toBe(true);
      expect(typeof store._sessionStorage === 'object').toBe(true);
      expect(typeof store.localStorage === 'object').toBe(false);
      expect(typeof store.sessionStorage === 'object').toBe(false);
    });

    test('prefix: local property local/set/get/del/clear', () => {
      var store = new NxStore({ prefix: 'abc' });
      store.local = { name: 'fei', github: 'afeiship', items: ['nx', 'next'] };
      var expected = { name: 'fei', github: 'afeiship', items: ['nx', 'next'] };

      // local
      expect(store.local).toEqual(expected);
      expect(store.$('local').get('name')).toBe('fei');

      // set/get
      store.$('local').set('name', 'afei');
      expect(store.$('local').get('name')).toBe('afei');

      // delete
      store.$('local').del('name');
      expect(store.$('local').get('name')).toBe(null);

      // clear
      store.$('local').clear();
      expect(store.local).toEqual({});
    });

    test('purify: get/set prefix/no-prefixy value', () => {
      var store = new NxStore({ prefix: 'abc', purify: true });
      store.local = {
        name: 'fei',
        github: 'afeiship',
        items: ['nx', 'next']
      };
      store.$('local', true).set('name', 'jswork');
      expect(store.$('local', true).gets()).toEqual({
        'abc@name': 'fei',
        'abc@github': 'afeiship',
        'abc@items': ['nx', 'next'],
        name: 'jswork'
      });
    });
  });
})();
