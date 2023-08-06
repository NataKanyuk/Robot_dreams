function add(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Invalid input: Both arguments should be numbers.';
    }
    return a + b;
}

function subtract(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Invalid input: Both arguments should be numbers.';
    }
    return a - b;
}

function multiply(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Invalid input: Both arguments should be numbers.';
    }
    return a * b;
}

function divide(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'Invalid input: Both arguments should be numbers.';
    }
    if (b === 0) {
        return 'Error: Division by zero';
    }
    return a / b;
}

function findMinMax(array) {
    let numericElements = array.filter(element => typeof element === 'number' || !isNaN(element));

    if (numericElements.length === 0) {
        return 'The array does not contain numeric elements.';
    }

    let minValue = Math.min(...numericElements);
    let maxValue = Math.max(...numericElements);
    return { min: minValue, max: maxValue };
}

console.log('Hello world!!!');

let message = 'Yulian';
alert('Hi, ' + message + '!!!');

let a = +prompt("Enter number five");
let b = +prompt("Enter number six");

alert(`Sum = ${add(a, b)}`);
alert(`Difference = ${subtract(a, b)}`);
alert(`Multiplication = ${multiply(a, b)}`);

if (a < b) {
    let confirmation = confirm("Are you sure you want to continue the division?");
    if (confirmation) {
        alert(`Division = ${divide(a, b)}`);
    } else {
        alert("Operation skipped");
    }
} else {
    alert(`Division = ${divide(a, b)}`);
}

let array = [12, 25, 6, 48, 33, 17, 9, 56, 40, 22];
console.log(array);

let { min, max } = findMinMax(array);
console.log('Minimum value:', min);
console.log('Maximum value:', max);

for (let i = 1; i <= 5; i++) {
    console.log('#'.repeat(i));
}
