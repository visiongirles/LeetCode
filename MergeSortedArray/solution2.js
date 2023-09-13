var merge = function (nums1, m, nums2, n) {
  let firstArrayIndex = m - 1;
  let secondArrayIndex = n - 1;
  let tempIndex = m + n - 1;

  while (firstArrayIndex >= 0 && secondArrayIndex >= 0) {
    if (nums1[firstArrayIndex] > nums2[secondArrayIndex]) {
      nums1[tempIndex] = nums1[firstArrayIndex];
      firstArrayIndex--;
    } else {
      nums1[tempIndex] = nums2[secondArrayIndex];
      secondArrayIndex--;
    }
    tempIndex--;
  }

  while (firstArrayIndex >= 0) {
    nums1[tempIndex] = nums1[firstArrayIndex];
    firstArrayIndex--;
    tempIndex--;
  }

  while (secondArrayIndex >= 0) {
    nums1[tempIndex] = nums2[secondArrayIndex];
    secondArrayIndex--;
    tempIndex--;
  }

  return;
};
