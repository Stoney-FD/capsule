'use strict';

import EventMap from 'eventmap';

class Capsule extends EventMap {
  constructor(descriptor, ...args) {
    descriptor.apply(this, args);
  }
}

export default Capsule;
