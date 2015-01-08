define(function() {

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

  Behavior.remove = function(name) {
    Behavior.list[name] = undefined;
  };

});