const { assert } = require('console');

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let fast = nums[0];
  let slow = nums[0];

  do {
    fast = nums[nums[fast]];
    slow = nums[slow];
  } while (fast !== slow);

  fast = nums[0];
  while (fast !== slow) {
    fast = nums[fast];
    slow = nums[slow];
  }

  return fast;
};

let nums = [3, 1, 3, 4, 2];
let result = findDuplicate(nums);
assert(result === 3, 'Test 1 failed');
