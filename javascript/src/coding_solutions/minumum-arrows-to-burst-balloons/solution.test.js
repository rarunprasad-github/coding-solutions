const findMinArrowShots = require("./solution");

describe('Test suite for minimum arrows to burst balloons', () => {
  test('Test should work as expected for test case 1', () => {
    const points = [[10,16],[2,8],[1,6],[7,12]];
    expect(findMinArrowShots(points)).toBe(2);
  })
})