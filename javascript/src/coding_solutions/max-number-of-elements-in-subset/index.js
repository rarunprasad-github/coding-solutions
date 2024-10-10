/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumLength = function(nums) {
  const numCount = {};
  for (let num of nums) {
    if (numCount[num] === undefined) numCount[num] = 1;
    else numCount[num]++;
  }
  
  nums.sort(function(a,b) { return a - b; });

  let maximumLength = 0;

  for (let num of nums) {
    if (num === 1) {
      if (numCount[num] % 2 === 1) maximumLength = Math.max(maximumLength, numCount[num]);
    } else {
      
    }
  }

};