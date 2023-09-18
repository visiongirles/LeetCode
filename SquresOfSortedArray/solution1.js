/**
 * @param {number[]} nums
 * @return {number[]}
 */

const assert = require('assert');
var sortedSquares = function (nums) {
  let result = new Array(nums.legth);
  let left = 0;
  let right = nums.length - 1;
  let index = nums.length - 1;

  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      result[index] = Math.pow(nums[left], 2);
      left++;
    } else {
      result[index] = Math.pow(nums[right], 2);
      right--;
    }
    index--;
  }

  return result;
};

let nums1 = [-4, -1, 0, 3, 10];
let result1 = sortedSquares(nums1);
let nums2 = [-7, -3, 2, 3, 11];
let result2 = sortedSquares(nums2);
let nums3 = [1];
let result3 = sortedSquares(nums3);
let nums4 = [-2, -1, 3];
let result4 = sortedSquares(nums4);

assert.deepEqual(result1, [0, 1, 9, 16, 100], 'Test 1 failed');
assert.deepEqual(result2, [4, 9, 9, 49, 121], 'Test 2 failed');
assert.deepEqual(result3, [1], 'Test 3 failed');
assert.deepEqual(result4, [1, 4, 9], 'Test 4 failed');
