// class Airport //
// 2 string  name && code //
// ex: name is stored in _name)//
// we wil use symbole (metaprogramming) //
// Symbol.toStringTag //

export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(value) {
    this._name = value;
  }

  set code(value) {
    this._code = value;
  }

  get [Symbol.toStringTag]() { // should return the airport //
    return this._code;
  }
}
