import { assert } from 'chai';

import { calculateTotalSum } from './app';
describe('calculateTotalSum', function() {
    it('should calculate the sum of numeric elements in the array', function() {
        const array = [12, 25, 6, null, 48, 33, 17, 9, false, 56, 40, 22];
        const result = calculateTotalSum(array);
        assert.strictEqual(result, 268);
    });

    it('should return 0 for an empty array', function() {
        const array = [];
        const result = calculateTotalSum(array);
        assert.strictEqual(result, 0);
    });

    it('should return 0 for an array with no numeric elements', function() {
        const array = ['a', 'b', 'c'];
        const result = calculateTotalSum(array);
        assert.strictEqual(result, 0);
    });
});
