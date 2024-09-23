const largestNumber = require("./solution");

describe('Largest Number Test suite', () => {
  test('Test case 1', () => {
    const input = [10,2];
    const expected = "210";
    expect(largestNumber(input)).toBe(expected);
  });

  test('Test case 2', () => {
    const input = [3,30,34,5,9];
    const expected = "9534330";
    expect(largestNumber(input)).toBe(expected);
  });
});