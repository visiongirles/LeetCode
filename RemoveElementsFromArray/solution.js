var assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

let nums = [3, 2, 2, 3];
let val = 3;

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;

var removeElement = function (nums, val) {
  let count = 0;
  let lastIndex = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] != val) {
      nums[lastIndex] = nums[index];
      lastIndex++;
      count++;
    }
  }

  console.log(nums);

  return count;
};

let k = removeElement(nums, val); // Calls your implementation
let m = removeElement(nums2, val2); // Calls your implementation

assert(k === 2, 'Not correct result');
assert(m === 5, 'Not correct result');
