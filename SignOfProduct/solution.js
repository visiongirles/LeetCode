/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
  var sign = 1;

  for (var index = 0; index < nums.length; index++) {
    if (nums[index] > 0) {
      sign = sign * 1;
    } else if (nums[index] < 0) {
      sign = sign * -1;
    } else {
      return 0;
    }
  }
  return sign;
};

var nums = [
  51, 38, 73, 21, 27, 55, 18, 15, 79, 29, 13, 45, 8, -73, -92, -20, -50, -60,
  -70,
];

console.log(arraySign(nums));
