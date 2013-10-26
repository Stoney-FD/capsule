(function() {
  (function(root, $) {
    udefine.globals['jquery'] = $;
    return udefine.inject['capsule'] = {
      root: root,
      name: 'Capsule'
    };
  })(this, this.jQuery);

}).call(this);

(function() {
  udefine('capsule', ['jquery', 'mixer', 'eventmap'], function($, mixer, EventMap) {
    var Capsule;
    Capsule = (function() {
      function Capsule(fn, elem) {
        var _ref;
        mixer([this, Capsule.prototype], new EventMap());
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
