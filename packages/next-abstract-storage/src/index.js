(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  var EMPTY_STR = '';
  var SEPARATOR = '@';

  // import packages:
  var _ = nx.json || require('@jswork/next-json');
  _ = nx.slice2str || require('@jswork/next-slice2str');

  var NxAbstractStorage = nx.declare('nx.AbstractStorage', {
    methods: {
      init: function (inOptions) {
        this.engine = inOptions.engine;
        this.prefix = inOptions.prefix || EMPTY_STR;
        this.options = inOptions;
        this.setAccessor();
      },
      setAccessor: function () {
        this.accessor = {
          get: this.options.get || 'getItem',
          set: this.options.set || 'setItem',
          remove: this.options.remove || 'removeItem',
          clear: this.options.clear || 'clear',
          save: this.options.save || 'save'
        };
      },
      serialize: function (inTarget) {
        return nx.stringify(inTarget);
      },
      deserialize: function (inString) {
        return nx.parse(inString);
      },
      set: function (inKey, inValue) {
        var index = inKey.indexOf('.');
        if (index > -1) {
          var paths = nx.slice2str(inKey, index, 1);
          var context = this.get(paths[0]) || {};
          nx.set(context, paths[1], inValue);
          this.set(paths[0], context);
        } else {
          this.engine[this.accessor.set](this.__key(inKey), this.serialize(inValue));
        }
        this.save();
      },
      sets: function (inObject) {
        nx.each(
          inObject,
          function (key, value) {
            this.set(key, value);
          },
          this
        );
      },
      get: function (inKey) {
        var index = inKey.indexOf('.');
        if (index > -1) {
          var paths = nx.slice2str(inKey, index, 1);
          var context = this.get(paths[0]) || {};
          return nx.get(context, paths[1]);
        } else {
          var value = this.engine[this.accessor.get](this.__key(inKey));
          return this.deserialize(value);
        }
      },
      gets: function (inKeys) {
        var result = {};
        var keys = this.__keys(inKeys);
        nx.each(
          keys,
          function (_, key) {
            result[key] = this.get(key);
          },
          this
        );
        return result;
      },
      del: function (inKey) {
        this.engine[this.accessor.remove](this.__key(inKey));
        this.save();
      },
      dels: function (inKeys) {
        var keys = this.__keys(inKeys);
        nx.each(
          keys,
          function (_, key) {
            this.del(key);
          },
          this
        );
      },
      clear: function () {
        this.engine[this.accessor.clear]();
        this.save();
      },
      keys: function () {
        return Object.keys(this.engine);
      },
      save: function () {
        // @template method
      },
      __key: function (inKey) {
        var prefix = this.prefix;
        return prefix ? [prefix, SEPARATOR, inKey].join(EMPTY_STR) : inKey;
      },
      __keys: function (inKeys) {
        var length_, keys;
        var allNsKeys = [];
        if (!Array.isArray(inKeys)) {
          keys = this.keys();
          length_ = this.prefix.length + 1;
          nx.each(
            keys,
            function (_, item) {
              if (this.prefix && item.indexOf(this.prefix + SEPARATOR) === 0) {
                allNsKeys.push(item.slice(length_));
              }
            },
            this
          );
          return allNsKeys.length ? allNsKeys : keys;
        }
        return inKeys;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxAbstractStorage;
  }
})();
