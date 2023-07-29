export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._color = color;
    this._motor = motor;
  }

  get brand() {
    return this._brand;
  }

  get color() {
    return this._color;
  }

  get motor() {
    return this._motor;
  }

  set color(newColor) {
    this._color = newColor;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  set motor(newMotor) {
    this._motor = newMotor;
  }

  cloneCar() {
    return new this.constructor();
  }
}
