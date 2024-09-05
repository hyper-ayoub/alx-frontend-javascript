// class named Currency // ok
// constructor  code && name * string // ok
// Each attribute must be stored in an “underscore” attribute version //
// getter && setter //
// method named displayFullCurrency //
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // setter //
  set amount(amount) {
    this._amount = amount;
  }

  // getter //
  get amount() {
    return this._amount;
  }

  set currency(currency) {
    this._currency = currency;
  }

  get currency() {
    return this._currency;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`; // following format amount currency_name (currency_code) //
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
