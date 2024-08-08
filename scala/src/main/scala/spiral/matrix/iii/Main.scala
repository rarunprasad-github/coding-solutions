package spiral.matrix.iii

@main
def checkSolution() = {
  val rows = 1
  val cols = 1
  val rStart = 0
  val cStart = 0
  val output = Solution.spiralMatrixIII(rows, cols, rStart, cStart)
  println(s"Output is $output")
}
