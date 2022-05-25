(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NxAbstractStorage = nx.AbstractStorage || require('@jswork/next-abstract-storage');

  var NxLocalStorage = nx.declare('nx.LocalStorage', {
    extends: NxAbstractStorage,
    methods: {
      init: function (inPrefix) {
        this.$base.init.call(this, {
          engine: global.localStorage,
          prefix: inPrefix || ''
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxLocalStorage;
  }
})();
