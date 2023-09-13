/**
 * @param {number[]} nums
 * @return {number}
 */

const { assert } = require('console');

let nums1 = [1, 1, 2];

var removeDuplicates = function (nums) {
  if (nums.length == 1) return 1;
  let currentIndex = 1;
  for (let index = 0; index < nums.length - 1; index++) {
    if (nums[index] !== nums[index + 1]) {
      nums[currentIndex] = nums[index + 1];
      currentIndex = currentIndex + 1;
    }
  }
  return currentIndex;
};

console.log(nums1);

let result1 = removeDuplicates(nums1);
assert(2 == result1, 'Test 1 failed');
