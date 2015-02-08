'use strict'

import {Behavior} from 'aurelia-templating'

export class OnSnapshot {
  static inject() { return [Element] }
  static metadata() {
    return Behavior
      .attachedBehavior('on-snapshot')
      .withProperty('on-snapshot')
      .noView()
  }

  constructor(canvas) {
    this.canvas = canvas
  }

  attached() {
    this.canvas.addEventListener('mouseup', (event) => this['on-snapshot'](event))
  }
}
