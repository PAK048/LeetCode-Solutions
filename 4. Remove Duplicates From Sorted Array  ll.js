/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length; // If the array has at most 2 elements, return its length

  let k = 2; // Start from index 2 (first two elements are always allowed)

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[k - 2]) {
      // Check against the element two places behind
      nums[k] = nums[i]; // Move the element forward
      k++; // Increase the position of the last valid element
    }
  }

  return k; // The new length of the modified array
};
