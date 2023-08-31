//1
function calculateAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) { // Виправлена умова
      sum += arr[i];
    }
  
    let avg = sum / arr.length;
    return avg; // Повернення середнього значення
  }
  
  let numbers = [1, 2, 3, 4, 5];
  
  let avg = calculateAverage(numbers);
  console.log("The average is: " + avg);
  //2
  function User(name, age) {
    this.name = name;
    this.age = age;
  }
  
  User.prototype.sayHello = function () {
    return `Hi. My name is ${this.name} and I'm ${this.age} years old`; // Виправлені помилки
  };
  
  const user = new User("Sherlock", 27);
  console.log(user.sayHello()); //Виклик методу
  //3
  const calculator = function (init = 0) {
    return function () {
      return init++;
    };
  };
  
  const c = calculator();
  console.log(c()); // має вивести 1
  console.log(c()); // має вивести 2
  
  