export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  get size() {
    return this._size;
  }

  get location() {
    return this._location;
  }

  set size(size) {
    this._size = size;
  }

  set location(location) {
    this._location = location;
  }

  // class is cast into a Number, it should return the size//
  /// /class is cast into a String, it should return the location //
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size;
    }
    if (hint === 'string') {
      return this._location;
    }
    return this;
  }
}
