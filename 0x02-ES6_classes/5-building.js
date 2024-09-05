// Consider this class as an abstract class//
//  And make sure that any class that extends from it //
// should implement a method named evacuationWarningMessage //

export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this.sqft = sqft;
  }

  // setter //
  set sqft(sqft) {
    this._sqft = sqft;
  }

  // getter //
  get sqft() {
    return this._sqft;
  }
}
