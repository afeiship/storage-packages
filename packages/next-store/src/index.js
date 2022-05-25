(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var NxLocalStorage = nx.LocalStorage || require('@jswork/next-local-storage');
  var NxSessionStorage = nx.SessionStorage || require('@jswork/next-session-storage');
  var DEFAULT_OPTIONS = { prefix: '', purify: false };

  //engie list:
  var NxStore = nx.declare('nx.Store', {
    properties: {
      local: {
        get: function () {
          return this._localStorage.gets();
        },
        set: function (inValue) {
          this._localStorage.sets(inValue);
        }
      },
      session: {
        get: function () {
          return this._sessionStorage.gets();
        },
        set: function (inValue) {
          this._sessionStorage.sets(inValue);
        }
      }
    },
    methods: {
      init: function (inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        // prefix storage:
        this._localStorage = new NxLocalStorage(options.prefix);
        this._sessionStorage = new NxSessionStorage(options.prefix);
        // pureify storage:
        if (options.purify) {
          this.localStorage = new NxLocalStorage();
          this.sessionStorage = new NxSessionStorage();
        }
      },
      config: function (inOptions) {
        nx.mix(this._localStorage, inOptions);
        nx.mix(this._sessionStorage, inOptions);
      },
      $: function (inName, inIsPurify) {
        var prefix = inIsPurify ? '' : '_';
        return this[prefix + inName + 'Storage'];
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxStore;
  }
})();
