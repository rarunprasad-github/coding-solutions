var minSwaps = function(s) {

  var getIntValue = function(sChar) {
    if (sChar === '[') return 1;
    return -1;
  }
  
  const n = s.length;
  // Stores the indices of closing brackets
  const bracketStack = [];

  for (let i =0; i < n; i ++) {
    if (s[i] === ']') {
      bracketStack.push(i);
    }
  }

  let result = 0;
  let effectiveSum = 0;
  for (let i = 0; i < n; i ++) {
    effectiveSum += getIntValue(s[i]);
    if (effectiveSum < 0) {
      const rightIndex = bracketStack.pop();
      [s[i], s[rightIndex]] = [s[rightIndex], s[i]];
      effectiveSum = 1;
      result++;
    }
  }

  return result;
};