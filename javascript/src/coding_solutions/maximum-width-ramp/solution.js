/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function(nums) {
  const n = nums.length;
  const monotonicStack = [];
  
  for (let i = 0; i < n; i++) {
    if (monotonicStack.length === 0 || nums[monotonicStack[monotonicStack.length-1]] > nums[i]) {
      monotonicStack.push(i);
    }
  }

  let maxWidth = 0;

  for (let j = n - 1; j >= 0; j--) {
    while(monotonicStack.length !== 0 && nums[monotonicStack[monotonicStack.length-1]] <= nums[j]) {
      maxWidth = Math.max(maxWidth, j - monotonicStack[monotonicStack.length-1])
      monotonicStack.pop();
    }
  }

  return maxWidth;
};