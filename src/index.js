define(['jquery', 'eventmap'], function($, EventMap) {

  var Capsule = function(target, factory) {
    EventMap.mixin(this, Capsule);

    this.$target = (target instanceof $) ? target : $(target);
    this.factory = factory;

    this.template = '';
    this.style = '';
  };

  Capsule.prototype.bindEvents = function() {

  };

  Capsule.prototype.addBehavior = function(name) {
    $('[data-behavior=' + name + ']', this.$target).each(function(t) {
      var $ = $(t);
      Behavior.call(name, $t);
    });
  };

  Capsule.prototype.execute = function(args) {
    this.factory.apply(this, args);

    // Inject style
  };

  Capsule.TemplateConnector = null;

  return Capsule;

});