var assert = require('assert');

let nums = [1, 1, 2]; // Input array
let expectedNums = [1, 2];

var removeDuplicates = function (nums) {
  let numLenght = nums.length;
  if (numLenght == 1) return 1;
  let currentIndex = 1;
  for (let index = 0; index < numLenght - 1; index++) {
    if (nums[index] == nums[index + 1]) {
      continue;
    } else {
      nums[currentIndex] = nums[index + 1];
      currentIndex = currentIndex + 1;
    }
  }
  return currentIndex;
};

let k = removeDuplicates(nums); // Calls your implementation

assert(k == expectedNums.length);
for (let i = 0; i < k; i++) {
  assert(nums[i] == expectedNums[i]);
}
