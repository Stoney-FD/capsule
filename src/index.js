define(['jquery', 'eventmap', 'capsule/behavior'], function($, EventMap, Behavior) {

  var Capsule = function(target, factory) {
    EventMap.mixin(this, Capsule);

    this.$target = (target instanceof $) ? target : $(target);
    this.factory = factory;

    this.defaultEvent = Capsule.defaultEvent;

    this.template = '';
    this.style = '';
  };

  Capsule.prototype.bindEvents = function(obj) {
    Object.keys(obj).forEach(function(name) {
      var eventName = name.split(' ')[0];
      var eventDelegate = name.split(' ')[1];
      var event = obj[name];

      $target.on(eventName, eventDelegate, event);
    }, this);
  };

  Capsule.prototype.addBehavior = function(name) {
    $('[data-behavior=' + name + ']', this.$target).each(function(t) {
      var $t = $(t);
      Behavior.call(name, $t);
    });
  };

  Capsule.prototype.execute = function(args) {
    this.factory.apply(this, args);

    // Inject style
  };

  Capsule.TemplateConnector = null;

  Capsule.defaultEvent = 'click';

  return Capsule;

});