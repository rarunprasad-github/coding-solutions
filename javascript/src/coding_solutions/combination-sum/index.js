var combinationSum = function(nums, target) {
  const filteredNums = nums.filter(num => num <= target);
  const n = filteredNums.length;
  const result = [];
  for ( let i = 0; i < n; i++ ) {
    if (target % filteredNums[i] === 0) {
      const requiredCount = (target / filteredNums[i]);
      result.push(Array(requiredCount).fill(filteredNums[i]));
      continue;
    }
    const subResult = [];
    let currentReminder = target % filteredNums[i];
    subResult.push(Math.floor(target / nums[i], nums[i]));
    let index = 0;
    while (currentReminder !== 0 && index < n) {

    }
  }
}