(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NxAbstractStorage = nx.AbstractStorage || require('@jswork/next-abstract-storage');
  var NxLruCacheEngine = nx.LruCacheEngine || require('@jswork/next-lru-cache-engine');
  var Cache = require('lru-cache-fs');

  var NxLruFsStorage = nx.declare('nx.LruFsStorage', {
    extends: NxAbstractStorage,
    methods: {
      init: function (inPrefix, inOptions) {
        // init lru-fs-cache
        var cacheName = inPrefix + 'lru_fs_cache';
        var cacheOpts = nx.mix({ max: 100, cacheName }, inOptions);
        NxLruCacheEngine.setInstance(Cache, cacheOpts);

        this.$base.init.call(this, {
          engine: NxLruCacheEngine,
          prefix: inPrefix || ''
        });
      },
      keys: function () {
        return this.engine.cache.keys();
      },
      save: function () {
        this.engine.cache.fsDump();
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxLruFsStorage;
  }
})();
