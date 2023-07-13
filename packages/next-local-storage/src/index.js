import nx from '@jswork/next';
import '@jswork/next-abstract-storage';

const NxLocalStorage = nx.declare('nx.LocalStorage', {
  extends: nx.AbstractStorage,
  methods: {
    init: function (inPrefix) {
      this.$base.init.call(this, {
        engine: global.localStorage,
        prefix: inPrefix || ''
      });
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxLocalStorage;
}

export default NxLocalStorage;
