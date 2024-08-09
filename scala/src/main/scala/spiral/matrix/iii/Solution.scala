package spiral.matrix.iii

object Solution {

  private val clockWiseRotationGuide = Map("center" -> "right","right" -> "down", "down" -> "left", "left" -> "up", "up" -> "right")

  def spiralMatrixIII(rows: Int, cols: Int, rStart: Int, cStart: Int): Array[Array[Int]] = {

    var result: Array[Array[Int]] = Array.empty
    var visitedNodesCounter = 0
    var distanceToTravel = 1
    var rotationCounter = 0

    result = result :+ Array(rStart, cStart)
    var currentRIndex = rStart
    var currentCIndex = cStart
    visitedNodesCounter = result.size
    var direction = "right"

    while (visitedNodesCounter < (rows * cols)) {
      val visitDetails = getValidPositionsVisited(rows, cols, currentRIndex, currentCIndex, distanceToTravel, direction)
      result = result ++ visitDetails._1
      currentRIndex = visitDetails._2
      currentCIndex = visitDetails._3
      visitedNodesCounter = result.size
      rotationCounter = rotationCounter + 1
      if (rotationCounter % 2 == 0) {
        distanceToTravel = distanceToTravel + 1
      }
      direction = clockWiseRotationGuide.get(direction).get
    }

    result
  }

  private def getNextRowAndColumnIndex(currentDirection: String, rIndex: Int, cIndex: Int): (Int, Int) = {
    currentDirection match {
      case "center" => (rIndex, cIndex)
      case "right" => (rIndex, cIndex + 1)
      case "down" => (rIndex + 1, cIndex)
      case "left" => (rIndex, cIndex - 1)
      case "up" => (rIndex - 1, cIndex)
    }
  }

  private def getValidPositionsVisited(rows: Int, cols: Int, rIndex: Int, cIndex: Int, distanceToTravel: Int, direction: String): (Array[Array[Int]], Int, Int) = {
    var result: Array[Array[Int]] = Array.empty
    var distanceTravelled = 0
    var (nextRIndex, nextCIndex) = (rIndex, cIndex)

    while(distanceTravelled < distanceToTravel) {
      val nextPosition = getNextRowAndColumnIndex(direction, nextRIndex, nextCIndex)
      nextRIndex = nextPosition._1
      nextCIndex = nextPosition._2
      if (isPositionValid(rows, cols, nextRIndex, nextCIndex)) {
        result = result :+ Array(nextRIndex, nextCIndex)
      }
      distanceTravelled = distanceTravelled + 1
    }
    (result, nextRIndex, nextCIndex)
  }

  private def isPositionValid(rows: Int, cols: Int, rIndex: Int, cIndex: Int): Boolean = {
    if (rIndex >= 0 && rIndex < rows && cIndex >= 0 && cIndex < cols) {
      true
    } else {
      false
    }
  }
}
