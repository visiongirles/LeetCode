/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  let result = new Map();

  for (let index = 1; index <= n; index++) {
    result.set(index, index);
  }

  for (index = 0; index < n; index++) {
    if (result.has(nums[index])) {
      result.delete(nums[index]);
    }
  }
  console.log(result);

  let array = [];
  result.forEach((key) => array.push(key));
  console.log(array);
};

let nums = [4, 3, 2, 7, 8, 2, 3, 1];
findDisappearedNumbers(nums);
