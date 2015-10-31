The future of capsulated as envisioned by me:

```javascript
var Logger = capsulated(function(data) {
  this.displayName = 'Logger';
  
  this.log = function() {
    console.log('Hello there');
  };
  
  this.connect('Store');
});

var logger = Logger();

logger.before('log', function() {
  console.log('You are about to log');
});

logger.log();

var Store = capsulated(function() {
  this.displayName = 'Store';
  
  this.clickCounter = 0;
  
  this.on('click', () => this.clickCounter++);
});

var Action = capsulated(function() {
  this.displayName = 'Action';
  
  // The store can now react to events from actions
  this.connect(Store);
  
  this.click = () => this.trigger('click');
});

var action = Action();
action.click();

capsulated.inject('attachTo', function(target) {
  target.innerHTML = this.render();
});

var Headline = capsulated(function(data) {
  this.displayName = 'Headline';
  
  this.render = function() {
    return `<h1>${data}</h1>`;
  };
});

var headline = Headline('My headline');
headline.attachTo(document.getElementById('container'));
```


Different concept, different future:
```javascript
var MyScreen = function({before, after}) {
  before(function() {
    console.log('before');
  });

  after(function() {
    
  });

  return <div></div>;
};

Capsulated.render(MyScreen, document.getElementById('content'));
```
