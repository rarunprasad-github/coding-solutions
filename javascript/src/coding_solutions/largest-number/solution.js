var largestNumber = function (nums) {
  nums.sort(function (a, b) {
    const aString = a.toString();
    const bString = b.toString();
    return parseInt(aString + bString) - parseInt(bString+aString);
  });
  let result = "";
  for (i = nums.length - 1; i >= 0; i--) {
    result += nums[i];
  }
  return result;
};

module.exports = largestNumber;