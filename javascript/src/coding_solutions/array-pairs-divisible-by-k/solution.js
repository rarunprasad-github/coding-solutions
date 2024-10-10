/**
 * 
 * @param {number[]} arr 
 * @param {number} k 
 * @returns {boolean}
 */
var canArrange = function(arr, k) {
    const counterMap = {};
    arr.forEach(function(value) {
      const result = (value % k + k) % k;
      if (counterMap[result] !== undefined) {
        counterMap[result]++;
      } else {
        counterMap[result] = 1;
      }
    });

    console.log(counterMap);

    for (let i = 0; i < arr.length - 1; i++) {
      const value = (arr[i] % k + k) % k;
      if (value === 0) {
        if (counterMap[value] % 2 !== 0) return false;
      } else {
        const expectedPairValue = k - value;
        if (counterMap[value] !== counterMap[expectedPairValue]) {
          return false;
        }
      }
    }

    return true;

};