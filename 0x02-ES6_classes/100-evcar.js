import Car from "./10-car.js";

export default class evCar extends Car{
  constructor(brand, motor, color, range) {

    this._brand= brand;
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

  get motor() [
     return this._motor;
  }
  set color(newColor) {
    this._color = newColor;
  }

  set brand(newBrand) {
    this._brand= newBrand;
  }
  
  set motor(newMotor) {
     this._motor = newMotor;
  }

  CloneCar() {
    return new Car(this._brand, this._motor, this._color);
  }
}
