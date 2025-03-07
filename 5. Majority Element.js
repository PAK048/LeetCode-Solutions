/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length === 0) return 0;
  let arrayLength = Math.floor(nums.length / 2);
  let countNum = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    // Nested loop check one by one each nums count
    for (let k = 1; k < nums.length; k++) {
      if (nums[j] === nums[k]) {
        countNum++;
      }
    }
    // if num appear less than target than the pointer forward to next num
    if (countNum < arrayLength) {
      j++;
    }
    // if the required condition met than returns that num.
    else if ((countNum) => arrayLength) return nums[j];
  }
};
