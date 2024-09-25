var isHappy = function (n) {
  if (n == 1) return true;
  else if (n == 4) return false;
  else {
    const numberString = n.toString();
    let sum = 0;
    for (i = 0; i < numberString.length; i++) {
      sum += numberString[i] * numberString[i];
    }
    return isHappy(parseInt(sum));
  }
};