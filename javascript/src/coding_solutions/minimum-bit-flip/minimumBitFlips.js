var minBitFlips = function(start, goal) {
  let xorResult = start ^ goal;
  let count = 0;

  while (xorResult !== 0) {
    count += xorResult & 1;
    xorResult >>= 1;
  }

  return count;
};

module.exports = minBitFlips;