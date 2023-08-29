function calculateTotalSum(array) {
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            totalSum += array[i];
        }
    }
    return totalSum;
}

const array = [12, 25, 6, null, 48, 33, 17, 9, false, 56, 40, 22];
const totalSum = calculateTotalSum(array);
console.log('Сума елементів масиву:', totalSum);
