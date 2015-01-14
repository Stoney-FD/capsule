define('capsule/behavior', function() {

  var Behavior = function(target, descriptor) {
    this.target = target;
    this.name = 'undefined-behavior';

    descriptor.call(this);
  };


  Behavior.list = {};

  Behavior.add = function(name, descriptor) {
    Behavior.list[name] = function(target) {
      var behavior = new Behavior(target, descriptor);
      behavior.name = name;

      return behavior;
    };
  };

  Behavior.call = function(name, target) {
    Behavior.list[name](target);
  };

  Behavior.remove = function(name) {
    Behavior.list[name] = undefined;
  };

  return Behavior;

});
define('capsule', ['require'], function(require) {
  var $ = require('jquery');
  var EventMap = require('eventmap');
  var Behavior = require('capsule/behavior');
  var Localization = require('capsule/localization');

  var Capsule = function(target, factory) {
    EventMap.mixin(this, Capsule);

    this.$target = (target instanceof $) ? target : $(target);
    this.factory = factory;

    this.defaultEvent = Capsule.defaultEvent;

    this.localization = new Localization();

    this.id = 'capsule-' + Date.now();

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
    var completeStyle = '<style id="' + this.id + '">' + $target.selector + '{ ' + this.style + ' } </style>';

    $('head').append(completeStyle);
  };

  Capsule.prototype.t = function(name) {

  };

  Capsule.EventPool = new EventMap();

  Capsule.TemplateConnector = null;

  Capsule.defaultEvent = 'click';

  return Capsule;

});

define('capsule/localization', function() {
  var Localization = function(data) {
    this.data = data || {};
    this.language = Localization.defaultLanguage;
  };

  Localization.defaultLanguage = 'en';

  return Localization;
});
