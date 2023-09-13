/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const assert = require('assert');
const { arrayBuffer } = require('stream/consumers');

let nums1 = [0, 1, 0, 3, 12];

let nums2 = [0, 1];

var moveZeroes = function (nums) {
  let currentIndex = 0;
  let notZeroIndex = 0;

  while (notZeroIndex < nums.length) {
    if (nums[notZeroIndex] === 0) {
      notZeroIndex++;
    } else {
      nums[currentIndex] = nums[notZeroIndex];
      currentIndex++;
      notZeroIndex++;
    }
  }

  while (currentIndex < nums.length) {
    nums[currentIndex] = 0;
    currentIndex++;
  }
};

moveZeroes(nums1);
moveZeroes(nums2);
console.log(nums1);
console.log(nums2);
assert.deepStrictEqual(nums1, [1, 3, 12, 0, 0], 'Test 1 failed');
