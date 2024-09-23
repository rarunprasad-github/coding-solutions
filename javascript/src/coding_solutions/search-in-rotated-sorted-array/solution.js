var search = function (nums, target) {
  let n = nums.length;
  let left = 0, right = n - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[n - 1]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  function binarySearch(left, right) {
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] == target) {
        return mid;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return -1;
  }
  let answer = binarySearch(0, left - 1);
  if (answer != -1) {
    return answer;
  }
  return binarySearch(left, n - 1);
};