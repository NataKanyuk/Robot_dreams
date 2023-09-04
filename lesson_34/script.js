class Vehicle {
    constructor(height, width, weight, color) {
        this.height = height;
        this.width = width;
        this.weight = weight;
        this.color = color;
    }

    getHeight() {
        return this.height;
    }

    getWidth() {
        return this.width;
    }

    getWeight() {
        return this.weight;
    }

    getColor() {
        return this.color;
    }
}
class Car extends Vehicle {
    constructor(height, width, weight, color, numberOfDoors, maxPassengers) {
        super(height, width, weight, color);
        this.numberOfDoors = numberOfDoors;
        this.maxPassengers = maxPassengers;
    }

    numberOfDoors() {
        return this.numberOfDoors;
    }

    getMaxPassengers() {
        return this.maxPassengers;
    }
}
class Bike extends Vehicle {
    constructor(height, width, weight, color, numberOfWheels) {
        super(height, width, weight, color);
        this.numberOfWheels = numberOfWheels;
    }

    getNumberOfWheels() {
        return this.numberOfWheels;
    }
}
const car = new Car(150, 200, 1500, "червоний", 4, 5);
console.log("Автомобіль:");
console.log("Висота:", car.getHeight());
console.log("Ширина:", car.getWidth());
console.log("Вага:", car.getWeight());
console.log("Колір:", car.getColor());
console.log("Кількість дверей:", car.numberOfDoors());
console.log("Максимальна кількість пасажирів:", car.getMaxPassengers());

const bike = new Bike(120, 60, 15, "синій", 2);
console.log("\nВелосипед:");
console.log("Висота:", bike.getHeight());
console.log("Ширина:", bike.getWidth());
console.log("Вага:", bike.getWeight());
console.log("Колір:", bike.getColor());
console.log("Кількість коліс:", bike.getNumberOfWheels());
