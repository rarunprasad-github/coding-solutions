package letter_tile_possibilities

import "testing"

func TestForEmptyString(t *testing.T) {
	input := ""
	output := 0
	result := numTilePossibilities(input)
	if output != result {
		t.Fatalf("Result %d not as expected, expected value %d", result, output)
	}
}

func TestForSingleCharacterString(t *testing.T) {
	input := "V"
	output := 1
	result := numTilePossibilities(input)
	if output != result {
		t.Fatalf("Result %d not as expected, expected value %d", result, output)
	}
}

func TestForBasicCases(t *testing.T) {
	input := "ABC"
	output := 8
	result := numTilePossibilities(input)
	if output != result {
		t.Fatalf("Result %d not as expected, expected value %d", result, output)
	}
}
