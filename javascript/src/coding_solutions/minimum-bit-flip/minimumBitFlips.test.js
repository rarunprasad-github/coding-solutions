const minBitFlips = require('./minimumBitFlips'); // Adjust the import based on your file structure

describe('minBitFlips', () => {
  test('should return 0 when start and goal are the same', () => {
    expect(minBitFlips(5, 5)).toBe(0);
  });

  test('should return the correct number of bit flips for different numbers', () => {
    expect(minBitFlips(10, 20)).toBe(4); // 1010 ^ 10100 -> 11110 -> 4 flips
    expect(minBitFlips(3, 7)).toBe(1); // 0011 ^ 0111 -> 0100 -> 1 flip
    expect(minBitFlips(0, 15)).toBe(4); // 0000 ^ 1111 -> 1111 -> 4 flips
  });

  test('should return the correct number of bit flips when one value is 0', () => {
    expect(minBitFlips(0, 8)).toBe(1); // 0000 ^ 1000 -> 1000 -> 1 flip
    expect(minBitFlips(15, 0)).toBe(4); // 1111 ^ 0000 -> 1111 -> 4 flips
  });

  test('should return the correct number of bit flips for large numbers', () => {
    expect(minBitFlips(1024, 2048)).toBe(2); // 10000000000 ^ 100000000000 -> 110000000000 -> 2 flips
    expect(minBitFlips(12345, 54321)).toBe(5); // Varying bits
  });
});
