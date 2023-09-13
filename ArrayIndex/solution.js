/**
 * @param {number[]} arr
 * @return {boolean}
 */

const { assert } = require('console');

let arr1 = [10, 2, 5, 3];
let arr2 = [3, 1, 7, 11];
let arr3 = [7, 1, 14, 11];

var checkIfExist = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      if (arr[i] === 2 * arr[j]) return true;
    }
  }
  return false;
};

let result1 = checkIfExist(arr1);
let result2 = checkIfExist(arr2);
let result3 = checkIfExist(arr3);
assert(result1 === true, 'Test 1 failed: Not correct result');
assert(result2 === false, 'Test 2 failed: Not correct result');
assert(result3 === true, 'Test 3 failed: Not correct result');
