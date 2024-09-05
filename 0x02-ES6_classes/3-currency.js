// class named Currency // ok
// constructor  code && name * string // ok
// Each attribute must be stored in an “underscore” attribute version //
// getter && setter //
// method named displayFullCurrency //

export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
  }

  // getter //
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // setter //
  set code(code) {
    this._code = code;
  }

  set name(name) {
    this._name = name;
  }

  displayFullCurrency() {
    return `${this.name} (${this.code})`; // that will return the attributes in the following format name(code) //
  }
}
