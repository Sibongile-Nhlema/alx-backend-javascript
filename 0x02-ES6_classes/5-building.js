export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    if (this.constructor === Building) {
      this.evacuationWarningMessage();
    } else {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  evacuationWarningMessage() {
    return this._sqft;
  }

  get sqft() {
    return this._sqft;
  }
}
