package game_of_life

import "testing"

// getSumOfAllNeighbhours calls greetings.getSumOfAllNeighbhours with an array,
// boundary row and column indices to return the sum
func TestGetSumOfAllNeighbhoursForFirstValue(t *testing.T) {
	board := [][]int{{0, 1, 0}, {0, 0, 1}, {1, 1, 1}, {0, 0, 0}}
	rowIndex := 0
	columnIndex := 0
	want := 1
	sum := getSumOfAllNeighbhours(board, rowIndex, columnIndex)
	if want != sum {
		t.Fatalf(`getSumOfAllNeighbhours = %q, want match for %#q, nil`, sum, want)
	}
}

// getSumOfAllNeighbhours calls greetings.getSumOfAllNeighbhours with an array,
// boundary row and column indices to return the sum
func TestGetSumOfAllNeighbhoursForFirstRow(t *testing.T) {
	board := [][]int{{0, 1, 0}, {0, 0, 1}, {1, 1, 1}, {0, 0, 0}}
	rowIndex := 0
	columnIndex := 1
	want := 2
	sum := getSumOfAllNeighbhours(board, rowIndex, columnIndex)
	if want != sum {
		t.Fatalf(`getSumOfAllNeighbhours = %q, want match for %#q, nil`, sum, want)
	}
}

// getSumOfAllNeighbhours calls greetings.getSumOfAllNeighbhours with an array,
// boundary row and column indices to return the sum
func TestGetSumOfAllNeighbhoursForFirstColumn(t *testing.T) {
	board := [][]int{{0, 1, 0}, {0, 0, 1}, {1, 1, 1}, {0, 0, 0}}
	rowIndex := 1
	columnIndex := 0
	want := 3
	sum := getSumOfAllNeighbhours(board, rowIndex, columnIndex)
	if want != sum {
		t.Fatalf(`getSumOfAllNeighbhours = %q, want match for %#q, nil`, sum, want)
	}
}

// getSumOfAllNeighbhours calls greetings.getSumOfAllNeighbhours with an array,
// boundary row and column indices to return the sum
func TestGetSumOfAllNeighbhoursForLastValue(t *testing.T) {
	board := [][]int{{0, 1, 0}, {0, 0, 1}, {1, 1, 1}, {0, 0, 0}}
	rowIndex := 3
	columnIndex := 2
	want := 2
	sum := getSumOfAllNeighbhours(board, rowIndex, columnIndex)
	if want != sum {
		t.Fatalf(`getSumOfAllNeighbhours = %q, want match for %#q, nil`, sum, want)
	}
}

// getSumOfAllNeighbhours calls greetings.getSumOfAllNeighbhours with an array,
// boundary row and column indices to return the sum
func TestGetSumOfAllNeighbhoursForLastRow(t *testing.T) {
	board := [][]int{{0, 1, 0}, {0, 0, 1}, {1, 1, 1}, {0, 0, 0}}
	rowIndex := 3
	columnIndex := 1
	want := 3
	sum := getSumOfAllNeighbhours(board, rowIndex, columnIndex)
	if want != sum {
		t.Fatalf(`getSumOfAllNeighbhours = %q, want match for %#q, nil`, sum, want)
	}
}

// getSumOfAllNeighbhours calls greetings.getSumOfAllNeighbhours with an array,
// boundary row and column indices to return the sum
func TestGetSumOfAllNeighbhoursForLastColumn(t *testing.T) {
	board := [][]int{{0, 1, 0}, {0, 0, 1}, {1, 1, 1}, {0, 0, 0}}
	rowIndex := 2
	columnIndex := 2
	want := 2
	sum := getSumOfAllNeighbhours(board, rowIndex, columnIndex)
	if want != sum {
		t.Fatalf(`getSumOfAllNeighbhours = %q, want match for %#q, nil`, sum, want)
	}
}

// getSumOfAllNeighbhours calls greetings.getSumOfAllNeighbhours with an array,
// boundary row and column indices to return the sum
func TestGetSumOfAllNeighbhoursForInnerValues(t *testing.T) {
	board := [][]int{{0, 1, 0}, {0, 0, 1}, {1, 1, 1}, {0, 0, 0}}
	rowIndex := 1
	columnIndex := 1
	want := 5
	sum := getSumOfAllNeighbhours(board, rowIndex, columnIndex)
	if want != sum {
		t.Fatalf(`getSumOfAllNeighbhours = %q, want match for %#q, nil`, sum, want)
	}
}
