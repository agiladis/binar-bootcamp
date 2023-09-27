class Car {
  static isNeedService = true;

  constructor(brand, fuelType, numberOfSeat, manufacturedCode) {
    this.brand = brand;
    this.fuelType = fuelType;
    this.numberOfSeat = numberOfSeat;
    this.manufacturedCode = manufacturedCode;
  }

  //   static method
  static drive() {
    return console.log(`${this.brand} is driving`);
  }

  // instance method
  turnOnNitrogen() {
    return console.log(`${this.brand} turn on nitrogen`);
  }
}

Toyota.fuelCheck = function (value) {
  return value;
};

let toyotaCar = new Car('Toyota', 'gasoline', 4, 'k230');
console.log(toyotaCar);
console.log(Toyota.fuelCheck(100));
