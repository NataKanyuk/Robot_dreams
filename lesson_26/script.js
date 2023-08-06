
function Accumulator(initialValue) {
    this.value = initialValue;
    this.increment = function() {
        this.value++;
    };
    this.decrement = function() {
        this.value--;
    };
}

function CancelableAccumulator(initialValue) {
    Accumulator.call(this, initialValue);
    this.originalValue = initialValue;
    this.clear = function() {
        this.value = this.originalValue;
    };
}

console.log('Hello world!!!');
let message = 'Yulian';
alert('Hi, ' + message + '!!!');

let a = +prompt("Enter number five");
let b = +prompt("Enter number six");
if (b === 0) {
    alert("Error: division by zero");
} else {
    alert(`Sum = ` + (a + b));
    alert(`Difference = ` + (a - b));
    alert(`Addition = ` + (a * b));
    if (a < b) {
        let confirmation = confirm("Are you sure you want to continue the operation?");
        if (confirmation) {
            alert(`Division = ` + (a / b));
        } else {
            alert("Operation skipped");
        }
    } else {
        alert(`Division = ` + (a / b));
    }
}

let array = [12, 25, 6, 48, 33, 17, 9, 56, 40, 22];
console.log(array);

let totalSum = 0;
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' || !isNaN(array[i])) {
        totalSum += array[i];
    }
}
console.log('Сума елементів масиву:', totalSum);

let numericElements = array.filter(element => typeof element === 'number' || !isNaN(element));

if (numericElements.length > 0) {
    let minValue = Math.min(...numericElements);
    let maxValue = Math.max(...numericElements);
    console.log('Мінімальне значення:', minValue);
    console.log('Максимальне значення:', maxValue);
} else {
    console.log('Масив не містить числових елементів.');
}
for (let i = 1; i <= 5; i++) {
    console.log('#'.repeat(i));
}
