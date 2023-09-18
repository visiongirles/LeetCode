/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  for (let index = 0; index < nums.length - 1; index++) {
    let number = nums[index];
    for (let secondIndex = index + 1; index < nums.length; index++) {
      if (number === nums[secondIndex]) return number;
    }
  }
};
