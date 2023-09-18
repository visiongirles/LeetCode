/**
 * @param {number[]} heights
 * @return {number}
 */

const assert = require('assert');

let heights = [1, 1, 4, 2, 1, 3];
var heightChecker = function (heights) {
  let count = 0;
  let sortedArray = [...heights];
  sortedArray = sortedArray.sort((a, b) => a - b);
  for (let index = 0; index < heights.length; index++) {
    if (heights[index] != sortedArray[index]) count++;
  }
  return count;
};

let result = heightChecker(heights);
console.log(result);

assert(3 === result, 'Test 1 failed');
