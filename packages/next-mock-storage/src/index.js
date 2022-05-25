(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var nxStubSingleton = nx.stubSingleton || require('@jswork/next-stub-singleton');

  var NxMockStorage = nx.declare('nx.MockStorage', {
    statics: nx.mix(null, nxStubSingleton()),
    methods: {
      _storage: {},
      // basic API
      getItem: function (inKey) {
        return this._storage[inKey] || null;
      },
      setItem: function (inKey, inValue) {
        this._storage[inKey] = inValue;
      },
      removeItem: function (inKey) {
        delete this._storage[inKey];
      },
      clear: function () {
        this._storage = {};
      },
      keys: function () {
        var ret = [];
        for (var key in this._storage) {
          if (this._storage.hasOwnProperty(key)) {
            ret.push(key);
          }
        }
        return ret;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxMockStorage;
  }
})();
