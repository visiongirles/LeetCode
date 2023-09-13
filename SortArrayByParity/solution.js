/**
 * @param {number[]} nums
 * @return {number[]}
 */

const assert = require('assert');

let nums1 = [3, 1, 2, 4];

var sortArrayByParity = function (nums) {
  let currentIndex = 0;
  let lastOddNumber = 0;

  while (lastOddNumber < nums.length) {
    if (nums[lastOddNumber] % 2 == 0) {
      let temp = nums[currentIndex];
      nums[currentIndex] = nums[lastOddNumber];
      nums[lastOddNumber] = temp;
      currentIndex++;
    }
    lastOddNumber++;
  }
};

sortArrayByParity(nums1);

assert.deepStrictEqual(
  nums1,
  [2, 4, 3, 1] || [2, 4, 1, 3] || [4, 2, 1, 3] || [4, 2, 3, 1],
  'Test 1 failed'
);
