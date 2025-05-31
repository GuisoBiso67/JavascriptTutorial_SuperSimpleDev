class Car {
  #brand;
  #model;
  speed;

  constructor(cars){
    this.#brand = cars.brand;
    this.#model = cars.model;
    this.speed = cars.speed;
    this.isTrunkOpen = cars.isTrunkOpen;
    this.acceleration = cars.acceleration;
    //this.displayInfo();
  }

  displayInfo(){
    console.log(`${this.#brand} ${this.#model}, Speed: ${this.speed} km/h, is Trunk Open? : ${this.isTrunkOpen}`);
  }

  go(){
    if(this.acceleration){
      this.speed += this.acceleration;
    }else{
      if(this.speed === 200){
        return;
      }else{
        this.speed += 5;
    }
    }
  }

  brake(){
    this.speed -= 5;
  }

  openTrunk(){
    if(this.acceleration){
      return console.log(`${this.brand} do not have a trunk`);
    }

    if(this.speed > 0){
      return;
    }else{
      this.isTrunkOpen = true;
    }
  }

  closeTrunk(){
    if(this.acceleration){
      return console.log(`${this.brand} do not have a trunk`);
    }
    this.isTrunkOpen = false;
  }
}

class RaceCar extends Car{
  acceleration = 0;

  constructor(cars){
    super(cars);
    this.acceleration = cars.acceleration;
  }
}

const car1 = new Car({
  brand: 'Toyota',
  model: 'Corolla',
  speed: 0,
  isTrunkOpen: false,
});
const car2 = new Car({
  brand: 'Tesla',
  model: 'Model 3',
  speed: 0,
  isTrunkOpen: false,
});
const car3 = new RaceCar({
  brand: 'McLaren',
  model: 'F1',
  speed: 0,
  acceleration: 20,
})

car1.openTrunk();
car1.closeTrunk();
car1.go();
car1.openTrunk()
car1.displayInfo();

car3.go();
car3.openTrunk();
car3.displayInfo();
