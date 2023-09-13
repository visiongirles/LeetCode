/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

let nums1 = [2, 0];
m = 1;
let nums2 = [1];
n = 1;

var merge = function (nums1, m, nums2, n) {
  let tempArray = [];

  let firstIndex = 0;
  let secondIndex = 0;

  // corner cases
  if (m === 0) {
    for (let index = 0; index < n; index++) {
      nums1[index] = nums2[index];
    }
    return;
  }

  if (n === 0) {
    return;
  }

  while (firstIndex < m && secondIndex < n) {
    if (nums1[firstIndex] <= nums2[secondIndex]) {
      tempArray.push(nums1[firstIndex]);
      firstIndex++;
    } else {
      tempArray.push(nums2[secondIndex]);
      secondIndex++;
    }
  }

  while (secondIndex < n) {
    tempArray.push(nums2[secondIndex]);
    secondIndex++;
  }

  while (firstIndex < m) {
    tempArray.push(nums1[firstIndex]);
    firstIndex++;
  }

  for (let index = 0; index < m + n; index++) {
    nums1[index] = tempArray[index];
  }

  return;
};

merge(nums1, m, nums2, n);
