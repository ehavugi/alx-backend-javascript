import Car from './10-car';

export default class evCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._brand = brand;
    this._color = color;
    this._motor = motor;
    this._range = range;
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
    return new Car();
  }
}
