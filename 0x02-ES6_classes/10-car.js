//   class name  car //
//  brand && motor && color //
// ex: name is stored in _name)//

export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(value) {
    this._brand = value;
  }

  get motor() {
    return this._motor;
  }

  set motor(value) {
    this._motor = value;
  }

  get color() {
    return this._color;
  }

  set color(value) {
    this._color = value;
  }

  static get [Symbol.species]() { // we will use Symbol.species //
    return this;
  }

  // method named cloneCar. This method should return a new object of the class//
  cloneCar() {
    return new this.constructor();
  }
}
