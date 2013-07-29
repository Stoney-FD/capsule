(function() {
  'use strict';
  var hasModule, _ref;

  Array.isArray || (Array.isArray = function(a) {
    return a.push === Array.prototype.push && (a.length != null);
  });

  hasModule = (typeof module !== "undefined" && module !== null) && module.exports;

  (function(root) {
    var _base, _base1;
    root.udefine || (root.udefine = function(name, deps, factory) {
      var dep, globalsArr, requireArr, result, _ref1, _ref2;
      if (Array.isArray(name)) {
        _ref1 = [void 0, [], deps], name = _ref1[0], deps = _ref1[1], factory = _ref1[2];
      } else {
        if (typeof name === 'function') {
          _ref2 = [void 0, [], name], name = _ref2[0], deps = _ref2[1], factory = _ref2[2];
        }
      }
      if (typeof define !== "undefined" && define !== null) {
        if (define.amd || define.umd) {
          udefine.env.amd = true;
          result = define.apply(this, arguments);
        }
      } else {
        if (hasModule) {
          requireArr = (function() {
            var _i, _len, _results;
            _results = [];
            for (_i = 0, _len = deps.length; _i < _len; _i++) {
              dep = deps[_i];
              _results.push(require(root.udefine.node[dep]));
            }
            return _results;
          })();
          udefine.env.commonjs = true;
          result = module.exports = factory.apply(this);
        } else {
          globalsArr = (function() {
            var _i, _len, _results;
            _results = [];
            for (_i = 0, _len = deps.length; _i < _len; _i++) {
              dep = deps[_i];
              _results.push(root.udefine.globals[dep]);
            }
            return _results;
          })();
          udefine.env.browser = true;
          result = factory.apply(this, globalsArr);
        }
      }
      return result;
    });
    (_base = root.udefine).globals || (_base.globals = {});
    (_base1 = root.udefine).commonjs || (_base1.commonjs = {});
    return null;
  })((_ref = typeof module !== "undefined" && module !== null ? module.exports : void 0) != null ? _ref : this);

}).call(this);

(function() {
  (function(root, $) {
    return udefine.globals['jquery'] = $;
  })(this, this.jQuery);

}).call(this);

(function() {
  udefine('capsule', ['root', 'jquery'], function(root, $) {
    var Capsule;
    Capsule = (function() {
      function Capsule(fn, elem) {
        var _ref;
        if (fn instanceof $) {
          _ref = [null, fn], fn = _ref[0], elem = _ref[1];
        }
        if (fn != null) {
          fn.call(this, this);
        }
        this.data = {};
      }

      Capsule.prototype.render = function() {
        if (!this.template) {
          return;
        }
        return this.template(this.data);
      };

      Capsule.prototype.execute = function() {
        var _ref, _ref1;
        if ((_ref = this.before) != null) {
          if (typeof _ref.apply === "function") {
            _ref.apply(this, arguments);
          }
        }
        this.render();
        return (_ref1 = this.after) != null ? typeof _ref1.apply === "function" ? _ref1.apply(this, arguments) : void 0 : void 0;
      };

      return Capsule;

    })();
    Capsule.TemplateConnector = {};
    return Capsule;
  });

}).call(this);

(function() {
  (function(root) {
    return root.$$ = function(node) {
      var data;
      data = $(node).data('$$');
      if (data == null) {
        data = {};
        $(node).data('$$', data);
      }
      return data;
    };
  })(this);

}).call(this);
