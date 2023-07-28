export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get location() {
    return this._location;
  }

  get size() {
    return this._size;
  }

  set size(newSize) {
    this._size = newSize;
  }

  set location(newLocation) {
    this._location = newLocation;
  }

  toString() {
    return `${this._location}`;
  }

  toNumber() {
    return `${this._size}`;
  }
}
