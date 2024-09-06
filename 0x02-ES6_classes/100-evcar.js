import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color); // use super //
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    this._range = value;
  }

  static get [Symbol.species]() {
    return Car;
  }

  cloneCar() {
    return new this.constructor[Symbol.species](); // use the [Symbol.species] //
  }
}
