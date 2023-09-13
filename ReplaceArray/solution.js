/**
 * @param {number[]} arr
 * @return {number[]}
 */

var assert = require('assert');

let arr1 = [17, 18, 5, 4, 6, 1];
let arr2 = [57010, 40840, 69871, 14425, 70605];

var replaceElements = function (arr) {
  if (arr.length === 1) return [-1];

  let max = -1; // Initialize max to -1 since there are no elements to the right of the last element
  const n = arr.length; // Length of the array

  for (let i = n - 1; i >= 0; i--) {
    const currentElement = arr[i];
    arr[i] = max; // Replace with the maximum value to the right
    max = Math.max(max, currentElement); // Update max if necessary
  }

  arr[arr.length - 1] = -1;
  return arr;
};

let result1 = replaceElements(arr1);
let result2 = replaceElements(arr2);
assert.deepStrictEqual(result1, [18, 6, 6, 6, 1, -1], 'Test 1 failed');
assert.deepStrictEqual(
  result2,
  [70605, 70605, 70605, 70605, -1],
  'Test 2 failed'
);
