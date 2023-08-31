//Lesson23
function calculateTotalSum(array) {
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i])) {
            totalSum += array[i];
        }
    }
    return totalSum;
}
//Lesson26
const array = [12, 25, 6, null, 48, 33, 17, 9, false, 56, 40, 22];
const totalSum = calculateTotalSum(array);
console.log('Сума елементів масиву:', totalSum);

function CancelableAccumulator(initialValue) {
    Accumulator.call(this, initialValue);
    this.originalValue = initialValue;
    this.clear = function () {
        this.value = this.originalValue;
    };
}
//Lesson28
function toggleImageSize(event) {
    const image = event.target;
    if (image.classList.contains('enlarged')) {
      image.style.transform = 'scale(1)';
      image.classList.remove('enlarged');
    } else { 
      image.style.transform = 'scale(1.6)'; 
      image.classList.add('enlarged');
    }
}