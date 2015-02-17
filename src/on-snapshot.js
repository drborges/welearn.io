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
    this.canvas.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
    }, false)
  }

  attached() {
    var drawing = false
    var context = this.canvas.getContext('2d')
    context.strokeStyle = "#000"
    context.lineWidth = 1
    context.lineCap = 'round'
    context.lineJoin = 'round'

    this.canvas.addEventListener('mousedown', (event) => {
      drawing = true
      context.beginPath()
      context.moveTo(event.x, event.y - this.canvas.getBoundingClientRect().top)
      console.log("Started at: (", event.x, ", ", event.y - this.canvas.getBoundingClientRect().top)
    })

    this.canvas.addEventListener('mouseup', (event) => {
      this['on-snapshot'](this.canvas)
      drawing = false
      context.closePath()
      console.log("Stopped at: (", event.x, ", ", event.y - this.canvas.getBoundingClientRect().top, ")")
    })

    this.canvas.addEventListener('mousemove', (event) => {
      console.log("x:", event.x, ", y:", event.y - this.canvas.getBoundingClientRect().top)
      if (drawing) {
        context.lineTo(event.x, event.y - this.canvas.getBoundingClientRect().top)
        context.stroke()
      }
    })
  }
}
