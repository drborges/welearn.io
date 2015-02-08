'use strict'

export class Welcome {

  constructor() {
    this.heading = 'Welcome to the Aurelia Navigation App!'
    this.firstName = 'John'
    this.lastName = 'Doe'
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`
  }

  welcome() {
    alert(`Welcome, ${this.fullName}!.`)
  }
}
