/**
 * @param {number[]} nums
 * @return {number[]}
 */

const assert = require('assert');

var sortedSquares = function (nums) {
  let result = [];
  let count = nums.length;
  let firstPointer = 0;
  let signHasChanged = false;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] >= 0) {
      firstPointer = index;
      signHasChanged = true;
      break;
    }

    if (index === nums.length - 1) firstPointer = index;
  }

  if (firstPointer === 0) {
    //идем только вправо
    while (count > 0) {
      result.push(Math.pow(nums[firstPointer], 2));
      firstPointer++;
      count--;
    }
  } else if (firstPointer === nums.length - 1 && !signHasChanged) {
    // идем только влево
    while (count > 0) {
      result.push(Math.pow(nums[firstPointer], 2));
      firstPointer--;
      count--;
    }
  } else {
    // идем в обе стороны
    let secondPointer = firstPointer - 1;

    while (count > 0) {
      if (firstPointer >= nums.length) {
        result.push(Math.pow(nums[secondPointer], 2));
        secondPointer--;
      } else if (secondPointer < 0) {
        result.push(Math.pow(nums[firstPointer], 2));
        firstPointer++;
      } else {
        if (Math.abs(nums[firstPointer]) < Math.abs(nums[secondPointer])) {
          result.push(Math.pow(nums[firstPointer], 2));
          firstPointer++;
        } else {
          result.push(Math.pow(nums[secondPointer], 2));
          secondPointer--;
        }
      }
      count--;
    }
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
