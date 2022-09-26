class Car {
  constructor(name, purchaseYear) {
    this.name = name;
    this.purchaseYear = purchaseYear;
  }
  age(x) {
    return x - this.purchaseYear;
  }
}

let date = new Date();
let currentYear = date.getFullYear();

let myCar = new Car("Ford", 2014);

console.log("My car is " + myCar.age(currentYear) + " years old.");