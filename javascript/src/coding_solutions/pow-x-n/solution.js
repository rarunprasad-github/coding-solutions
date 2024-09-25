var myPow = function(x, n) {
  function binaryExponentiation(x, n) {
    if (n == 0) return 1;
    else if (n < 0) return binaryExponentiation(1/x, -n);
    else {
      if (n % 2 == 0) {
        return binaryExponentiation(x*x, n/2)
      } else {
        return x * binaryExponentiation(x, n -1);
      }
    }
  }  
};