class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return "Car Is Running Now";
  }

  stop() {
    return "Car Is Stopped";
  }
}

// Needed Output

let car1 = new Car("MG", 2022, 420000);
let car2 = new Car("volvo", 2024, 50000);
let car3 = new Car("Toytoa", 2020, 70000);

console.log(
  `Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`
);

console.log(car1.run());

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");
