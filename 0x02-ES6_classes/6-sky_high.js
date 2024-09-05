// Consider this class as an abstract class//
//  And make sure that any class that extends from it //
// should implement a method named evacuationWarningMessage //
// just use getter //

import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // must be assigned to the parent class Building//
    this.floors = floors;
  }

  set floors(value) {
    this._floors = value;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`; // NUMBER_OF_FLOORS//
  }
}
