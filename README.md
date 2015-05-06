Capsule
=======

[![devDependency Status](https://david-dm.org/frostney/capsule/dev-status.png)](https://david-dm.org/Stoney-FD/capsule#info=devDependencies)

Provides a widget with a view and logic.

Getting started
---------------

1. Create a new capsule

```javascript
var myCapsule = new Capsule();
```

Each `Capsule` can trigger events, where events can be added through `.on` and removed by using the `.off` method. An example would be:
```javascript
myCapsule.on('test', function() {
  console.log('Do something');
});

myCapsule.trigger('test');
```

2. Use the capsule

License
-------
This is public domain. If that does not work for you, you can alternatively use the MIT license.
