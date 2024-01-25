import nx from '@jswork/next';
import '@jswork/next-abstract-storage';

const NxWeappStorage = nx.declare('nx.WeappStorage', {
  extends: nx.AbstractStorage,
  methods: {
    init: function (inPrefix) {
      this.$base.init.call(this, {
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
      return typeof inTarget === 'string' ? inTarget : JSON.stringify(inTarget);
    },
    keys: function () {
      return wx.getStorageInfoSync().keys;
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxWeappStorage;
}

export default NxWeappStorage;
