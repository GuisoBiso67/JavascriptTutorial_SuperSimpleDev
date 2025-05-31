class Car {
  brand;
  model;

  constructor(cars){
    this.brand = cars.brand;
    this.model = cars.model;
    //this.displayInfo();
  }

  displayInfo(){
    console.log(`${this.brand} ${this.model}`);
  }
}

const cars = [
  {
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    brand: 'Tesla',
    model: 'Model 3',
  }
].map((carDetails) => {
  return new Car(carDetails);
});

const car1 = new Car(cars[0]);
const car2 = new Car(cars[1]);
car1.displayInfo();
car2.displayInfo();