package matrix.spiral.iii

import org.scalatest.funsuite.AnyFunSuite

class SolutionTest extends AnyFunSuite {

  test("spiralMatrixIII should work as expected for case I") {
    val (rows, cols, rStart, cStart) = (1, 1, 0, 0)
    val actualOutput = Solution.spiralMatrixIII(rows, cols, rStart, cStart)
    val expectedOutput = Array(Array(0, 0))
    assert(actualOutput === expectedOutput)
  }

  test("spiralMatrixIII should work as expected for case II") {
    val (rows, cols, rStart, cStart) = (1, 4, 0, 0)
    val actualOutput = Solution.spiralMatrixIII(rows, cols, rStart, cStart)
    val expectedOutput = Array(Array(0,0),Array(0,1),Array(0,2),Array(0,3))
    assert(actualOutput === expectedOutput)
  }

  test("spiralMatrixIII should work as expected for case III") {
    val (rows, cols, rStart, cStart) = (5, 6, 1, 4)
    val actualOutput = Solution.spiralMatrixIII(rows, cols, rStart, cStart)
    val expectedOutput = Array(Array(1, 4), Array(1, 5), Array(2, 5), Array(2, 4), Array(2, 3), Array(1, 3), Array(0, 3), Array(0, 4), Array(0, 5), Array(3, 5), Array(3, 4), Array(3, 3), Array(3, 2), Array(2, 2), Array(1, 2), Array(0, 2), Array(4, 5), Array(4, 4), Array(4, 3), Array(4, 2), Array(4, 1), Array(3, 1), Array(2, 1), Array(1, 1), Array(0, 1), Array(4, 0), Array(3, 0), Array(2, 0), Array(1, 0), Array(0, 0))
    assert(actualOutput === expectedOutput)
  }

}
