/**
 * @param {number[]} nums
 * @return {number[]}
 */

var assert = require('assert');

var findDisappearedNumbers = function (nums) {
  for (num of nums) {
    const index = Math.abs(num) - 1;
    if (nums[index] > 0) {
      nums[index] = -nums[index];
    }
  }
  let result = [];
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] > 0) result.push(index + 1);
  }
  return result;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
let result = findDisappearedNumbers(nums);
assert.deepEqual(result, [5, 6], 'Test 1 failed');
