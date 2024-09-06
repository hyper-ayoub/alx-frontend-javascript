import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(range); // use super() //
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

  static get [Symbol.species]() {
    return Car; // return here the Car //
  }

  cloneCar() {
    return new this.constructor();
  }
}
