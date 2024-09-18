const combine = require('./combinations')

describe('combine', () => {
  test('should return the correct combinations for n = 4 and k = 2', () => {
    const n = 4;
    const k = 2;
    const result = combine(n, k);
    const expected = [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4]
    ];
    expect(result).toEqual(expected);
  });

  test('should return the correct combinations for n = 5 and k = 3', () => {
    const n = 5;
    const k = 3;
    const result = combine(n, k);
    const expected = [
      [1, 2, 3],
      [1, 2, 4],
      [1, 2, 5],
      [1, 3, 4],
      [1, 3, 5],
      [1, 4, 5],
      [2, 3, 4],
      [2, 3, 5],
      [2, 4, 5],
      [3, 4, 5]
    ];
    expect(result).toEqual(expected);
  });

  test('should return an empty array if k > n', () => {
    const n = 3;
    const k = 4;
    const result = combine(n, k);
    expect(result).toEqual([]);
  });

  test('should return a single combination for n = 1 and k = 1', () => {
    const n = 1;
    const k = 1;
    const result = combine(n, k);
    const expected = [[1]];
    expect(result).toEqual(expected);
  });

  test('should return an empty combination for n = 0 and k = 0', () => {
    const n = 0;
    const k = 0;
    const result = combine(n, k);
    expect(result).toEqual([[]]);
  });
});
