/**
 * @param {number[]} nums
 * @return {number[]}
 */

var assert = require('assert');

var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  let result = new Map();

  for (let index = 1; index <= n; index++) {
    result.set(index, index);
  }

  for (index = 0; index < n; index++) {
    if (result.has(nums[index])) {
      result.delete(nums[index]);
    }
  }

  let array = [];
  result.forEach((key) => array.push(key));
  return array;
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
let result = findDisappearedNumbers(nums);
assert.deepEqual(result, [5, 6], 'Test 1 failed');
