package path_with_maximum_gold

func getMaximumGold(grid [][]int) int {
	maxGold := 0
	for i := 0; i < len(grid); i++ {
		for j := 0; j < len(grid[0]); j++ {
			maxGold = max(maxGold, backTrack(grid, i, j, len(grid), len(grid[0])))
		}
	}
	return maxGold
}

func backTrack(grid [][]int, row int, col int, rowSize int, columnSize int) int {

	if row < 0 || col < 0 || row >= rowSize || col >= columnSize || grid[row][col] == 0 {
		return 0
	}

	gridValue := grid[row][col]
	grid[row][col] = 0

	DIR := []int{0, 1, 0, -1, 0}
	maxGold := 0

	for i := 0; i < 4; i++ {
		maxGold = max(maxGold, backTrack(grid, row+DIR[i], col+DIR[i+1], rowSize, columnSize))
	}

	grid[row][col] = gridValue
	maxGold = maxGold + gridValue

	return maxGold

}
