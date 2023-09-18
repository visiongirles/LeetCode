/**
 * @param {number[]} nums
 * @return {number}
 */

const { assert } = require('console');

var thirdMax = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  if (nums.length >= 3) {
    let maxNumberOne = nums[0];

    for (let index = 0; index < nums.length; index++) {
      if (nums[index] > maxNumberOne) maxNumberOne = nums[index];
    }

    let maxNumberTwo = -Math.pow(2, 31) - 1;

    for (let index = 0; index < nums.length; index++) {
      if (nums[index] === maxNumberOne) continue;
      else if (nums[index] > maxNumberTwo) maxNumberTwo = nums[index];
      if (maxNumberTwo + 1 === maxNumberOne) break;
    }

    let maxNumberThree = -Math.pow(2, 31) - 1;

    for (let index = 0; index < nums.length; index++) {
      if (nums[index] === maxNumberOne) continue;
      else if (nums[index] === maxNumberTwo) continue;

      if (nums[index] > maxNumberThree) maxNumberThree = nums[index];
      if (maxNumberThree + 1 === maxNumberTwo) break;
    }
    if (maxNumberTwo === -Math.pow(2, 31) - 1) return maxNumberOne;
    if (maxNumberThree === -Math.pow(2, 31) - 1) return maxNumberOne;

    return maxNumberThree;
  }
};

let nums1 = [1, 1, 2];
// let nums2 = [3, 2, 1];

let result1 = thirdMax(nums1);
// let result2 = thirdMax(nums2);
assert(1 === result1, 'Test 1 failed');
// assert(1 === result2, 'Test 2 failed');
