package number_of_atoms

import (
	"strings"
	"testing"
)

func TestCountOfAtomsForTC1(t *testing.T) {
	input := "H2O"
	expect := "H20"
	output := countOfAtoms(input)
	if strings.Compare(expect, output) != 0 {
		t.Fatalf("Test failed as output %s does not match expected %s", output, expect)
	}
}
