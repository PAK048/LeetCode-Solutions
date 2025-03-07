/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

var removeElement = function (nums, val) {
  let i = 0; // Pointer for the position to place the next non-val element
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j]; // Move the non-val element to the front
      i++; // Increment the pointer
    }
  }
  nums.length = i; // Truncate the array to remove remaining elements
  return i;
};
