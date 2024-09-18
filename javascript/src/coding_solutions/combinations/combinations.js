var combine = function (n, k) {
  const ans = [];
  const backtrack = (curr, firstNum) => {
    if (curr.length === k) {
      ans.push([...curr]);
      return;
    }
    const need = k - curr.length;
    const remain = n - firstNum + 1;
    const available = remain - need;
    for (let num = firstNum; num <= firstNum + available; num++) {
      curr.push(num);
      backtrack(curr, num + 1);
      curr.pop();
    }
  };
  backtrack([], 1);
  return ans;
};

module.exports = combine;