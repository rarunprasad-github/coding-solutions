package game_of_life

func gameOfLife(board [][]int) {
	rowSize := len(board)
	columnSize := len(board[0])
	for i := 0; i < rowSize; i++ {
		for j := 0; j < columnSize; j++ {
			sumOfAllNeighbhours := getSumOfAllNeighbhours(board, i, j)
			if board[i][j] == 0 && sumOfAllNeighbhours == 3 {
				board[i][j] = 2
			} else if board[i][j] == 1 && (sumOfAllNeighbhours < 2 || sumOfAllNeighbhours > 3) {
				board[i][j] = 3
			}
		}
	}
	for i := 0; i < rowSize; i++ {
		for j := 0; j < columnSize; j++ {
			if board[i][j] == 2 {
				board[i][j] = 1
			} else if board[i][j] == 3 {
				board[i][j] = 0
			}
		}
	}
}

func getSumOfAllNeighbhours(board [][]int, rowIndex int, columnIndex int) int {
	sum := 0
	for i := rowIndex - 1; i <= rowIndex+1; i++ {
		if i < 0 || i > len(board)-1 {
			continue
		}
		for j := columnIndex - 1; j <= columnIndex+1; j++ {
			if j < 0 || j > len(board[0])-1 || (i == rowIndex && j == columnIndex) {
				continue
			}
			sum += board[i][j] % 2
		}
	}
	return sum
}
