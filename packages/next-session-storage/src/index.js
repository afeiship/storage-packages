import nx from '@jswork/next';
import '@jswork/next-abstract-storage';

const NxSessionStorage = nx.declare('nx.SessionStorage', {
  extends: nx.AbstractStorage,
  methods: {
    init: function (inPrefix) {
      this.$base.init.call(this, {
        engine: global.sessionStorage,
        prefix: inPrefix || ''
      });
    }
  }
});

if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = NxSessionStorage;
}

export default NxSessionStorage;
