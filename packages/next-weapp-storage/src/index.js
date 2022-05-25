(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NxAbstractStorage = nx.AbstractStorage || require('@jswork/next-abstract-storage');

  var NxWeappStorage = nx.declare('nx.WeappStorage', {
    extends: NxAbstractStorage,
    methods: {
      init: function (inPrefix) {
        this.base({
          engine: wx,
          prefix: inPrefix || ''
        });
      },
      setAccessor: function () {
        this.accessor = {
          set: 'setStorageSync',
          get: 'getStorageSync',
          remove: 'removeStorageSync',
          clear: 'clearStorageSync'
        };
      },
      serialize: function (inTarget) {
        return inTarget;
      },
      keys: function () {
        return wx.getStorageInfoSync().keys;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxWeappStorage;
  }
})();
