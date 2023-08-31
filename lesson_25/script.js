function isEmpty(obj) {
    for (let key in obj) {
  return !obj.hasOwnProperty(key);
}
        }
    }
    return true;
}

let user = {
    name: "Nata",
    age: 23,
    sayHello: function () {
        return `Привіт, я ${this.name}, мені ${this.age} років`;
    }
};

let calculator = {
    num1: 0,
    num2: 0,
    ask: function () {
        this.num1 = +prompt("Введіть перше число:");
        this.num2 = +prompt("Введіть друге число:");
    },
    sum: function () {
        return this.num1 + this.num2;
    },
    mul: function () {
        return this.num1 * this.num2;
    }
};

console.log(isEmpty(user));

console.log(user.sayHello());

calculator.ask();
console.log("Сума:", calculator.sum());
console.log("Добуток:", calculator.mul());
