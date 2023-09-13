const { assert } = require('console');

/**
 * @param {number[]} arr
 * @return {boolean}
 */

let arr1 = [2, 1];
let arr2 = [3, 5, 5];
let arr3 = [0, 3, 2, 1];
let arr4 = [2, 0, 2];

var validMountainArray = function (arr) {
  // corner cases
  // 1
  if (arr.length <= 2) return false;

  // 2
  if (arr[0] > arr[1]) return false;

  let isUp = true;
  let isDown = false;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === arr[index + 1]) return false;
    if (isUp === true) {
      if (arr[index] > arr[index + 1]) {
        isUp = false;
        isDown = true;
        continue;
      }
    }

    if (isDown === true) {
      if (arr[index] < arr[index + 1]) {
        isDown = false;
        return false;
      }
    }
  }

  //checking if the mountain goes ever down
  if (isUp) return false;

  return true;
};

let result1 = validMountainArray(arr1);
let result2 = validMountainArray(arr2);
let result3 = validMountainArray(arr3);
let result4 = validMountainArray(arr4);

assert(result1 === false, 'Test 1 failed');
assert(result2 === false, 'Test 2 failed');
assert(result3 === true, 'Test 3 failed');
assert(result4 === false, 'Test 4 failed');
