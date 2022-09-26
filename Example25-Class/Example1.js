// Create a Car class
class Car {
    constructor(brand) {       //The constructor() is a special method! It has to have the exact name "constructor" this holds object properties and so this is executed/initialized each time a new class object is created, so need to call it specifically.
        this.carname = brand;
      }
}
    
// Create a Car Object
myCar = new Car("Ford");
console.log(myCar)         //Car { carname: 'Ford' }
console.log(myCar.carname) //Ford              

//Create another Car Object
yourCar = new Car("Audi");
console.log(yourCar)         //Car { carname: 'Audi' }
console.log(yourCar.carname) //Audi
console.log(yourCar.constructor) //Audi