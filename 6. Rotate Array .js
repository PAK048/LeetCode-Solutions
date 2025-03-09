// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  k = k % nums.length; // Optimize for large k

  nums.reverse(); // Reverse entire array
  nums.splice(0, k, ...nums.slice(0, k).reverse()); // Reverse first k elements
  nums.splice(k, nums.length - k, ...nums.slice(k).reverse()); // Reverse remaining elements
};
