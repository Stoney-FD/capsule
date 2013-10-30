(function() {
  (function(root, $) {
    return udefine.configure(function(root) {
      udefine.modules.globals['jquery'] = $;
      return udefine.inject.add('capsule', {
        root: root,
        name: 'Capsule'
      });
    });
  })(this, this.jQuery);

}).call(this);

(function() {
  udefine('capsule', ['jquery', 'mixer', 'eventmap'], function($, mixer, EventMap) {
    var Capsule;
    Capsule = (function() {
      function Capsule(fn, elem) {
        var _ref,
          _this = this;
        mixer([this, Capsule.prototype], new EventMap());
        if (fn instanceof $) {
          _ref = [null, fn], fn = _ref[0], elem = _ref[1];
        }
        if (fn != null) {
          fn.call(this, this);
        }
        this.data = {};
        this.on('render', function() {
          if (!_this.template) {
            return;
          }
          return _this.template(_this.data);
        });
      }

      Capsule.prototype.execute = function() {
        return this.trigger.apply(this('render', arguments));
      };

      return Capsule;

    })();
    Capsule.TemplateConnector = {};
    return Capsule;
  });

}).call(this);
