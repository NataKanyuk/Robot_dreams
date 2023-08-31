const { assert } = require('chai');
const calculateTotalSum = require('./script');

describe('calculateTotalSum', function () {
    it('should calculate the sum of numeric elements in the array', function () {
        const array = [12, 25, 6, null, 48, 33, 17, 9, false, 56, 40, 22];
        const result = calculateTotalSum(array);
        assert.strictEqual(result, 268);
    });

    it('should return 0 for an empty array', function () {
        const array = [];
        const result = calculateTotalSum(array);
        assert.strictEqual(result, 0);
    });

    it('should return 0 for an array with no numeric elements', function () {
        const array = ['a', 'b', 'c'];
        const result = calculateTotalSum(array);
        assert.strictEqual(result, 0);
    });
});
//Lesson26
const { assert } = require('chai');
const CancelableAccumulator = require('./script');
describe('CancelableAccumulator', function () {
    it('should accumulate values and clear them', function () {
        const accumulator = new CancelableAccumulator(10);

        assert.strictEqual(accumulator.value, 10);

        accumulator.increment();
        accumulator.increment();
        accumulator.increment();
        assert.strictEqual(accumulator.value, 13);

        accumulator.clear();
        assert.strictEqual(accumulator.value, 10);
    });
});
//lesson28
const { assert } = require('chai');
const toggleImageSize = require('./script');

describe('toggleImageSize', () => {
    it('should enlarge the image when it does not have the "enlarged" class', () => {
        const image = {
            classList: {
                contains: className => className === 'enlarged',
                add: className => {
                    assert.strictEqual(className, 'enlarged');
                },
            },
            style: {
                transform: '',
            },
        };

        toggleImageSize({ target: image });

        assert.strictEqual(image.style.transform, 'scale(1.6)');
    });

    it('should shrink the image when it has the "enlarged" class', () => {
        const image = {
            classList: {
                contains: className => className === 'enlarged',
                remove: className => {
                    assert.strictEqual(className, 'enlarged');
                },
            },
            style: {
                transform: '',
            },
        };

        toggleImageSize({ target: image });

        assert.strictEqual(image.style.transform, 'scale(1)');
    });
});
