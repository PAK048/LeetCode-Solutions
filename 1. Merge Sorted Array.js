/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1; // Last valid element in nums1
  let j = n - 1; // Last element in nums2
  let k = m + n - 1; // Last index in nums1

  // Merge from the end
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // Copy remaining elements from nums2 (if any)
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
};
