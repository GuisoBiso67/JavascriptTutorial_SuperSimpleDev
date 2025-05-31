class Car {
  brand;
  model;
  speed;

  constructor(cars){
    this.brand = cars.brand;
    this.model = cars.model;
    this.speed = cars.speed;
    //this.displayInfo();
  }

  displayInfo(){
    console.log(`${this.brand} ${this.model}, Speed: ${this.speed} km/h`);
  }

  go(){
    this.speed += 5;
  }

  brake(){
    this.speed -= 5;
  }
}

const cars = [
  {
    brand: 'Toyota',
    model: 'Corolla',
    speed: 0,
  },
  {
    brand: 'Tesla',
    model: 'Model 3',
    speed: 0,
  }
].map((carDetails) => {
  return new Car(carDetails);
});

const car1 = new Car(cars[0]);
const car2 = new Car(cars[1]);

for (let i=0;i<3;i++){
  car1.go(); // speed 15km;
}
car1.brake(); // speed 10km;
car1.displayInfo();
