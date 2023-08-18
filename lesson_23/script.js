let array = [12, 25, 6, null, 48, 33, 17, 9, false, 56, 40, 22];
console.log(array);

let totalSum = 0;
for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === 'number' && !isNaN(array[i])) {
        totalSum += array[i];
    }
}
console.log('Сума елементів масиву:', totalSum);

let numericElements = array.filter(element => typeof element === 'number' && !isNaN(element));

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
