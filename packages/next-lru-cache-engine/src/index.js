(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var NxLruCacheEngine = nx.declare('nx.LruCacheEngine', {
    statics: {
      cache: null,
      setInstance: function (inLRUClazz, inOptions) {
        this.cache = new inLRUClazz(inOptions);
      },
      setItem: function (inKey, inValue) {
        return this.cache.set(inKey, inValue);
      },
      getItem: function (inKey) {
        return this.cache.get(inKey);
      },
      removeItem: function (inKey) {
        return this.cache.del(inKey);
      },
      clear: function () {
        var keys = this.cache.keys();
        keys.forEach(function (key) {
          this.removeItem(key);
        }, this);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxLruCacheEngine;
  }
})();
