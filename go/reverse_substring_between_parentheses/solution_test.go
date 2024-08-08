package reverse_substring_between_parentheses

import (
	"strings"
	"testing"
)

func TestGeneratePairArrayForTestCase1(t *testing.T) {
	input := "(u(love)i)"
	expect := []int{9, -1, 7, -1, -1, -1, -1, 2, -1, 0}
	result := generatePairArray(input)
	allResultsSatisfied := true
	for i := 0; i < len(result) && allResultsSatisfied; i++ {
		if result[i] != expect[i] {
			allResultsSatisfied = false
		}
	}
	if !allResultsSatisfied || (len(result) != len(expect)) {
		t.Fatalf("Results not matched, expected %v result %v", expect, result)
	}
}

func TestGeneratePairArrayForTestCase2(t *testing.T) {
	input := "(u)"
	expect := []int{2, -1, 0}
	result := generatePairArray(input)
	allResultsSatisfied := true
	for i := 0; i < len(result) && allResultsSatisfied; i++ {
		if result[i] != expect[i] {
			allResultsSatisfied = false
		}
	}
	if !allResultsSatisfied || (len(result) != len(expect)) {
		t.Fatalf("Results not matched, expected %v result %v", expect, result)
	}
}

func TestReverseParenthesesForTestCase1(t *testing.T) {
	input := "(u(love)i)"
	expect := "iloveu"
	result := reverseParentheses(input)
	if strings.Compare(expect, result) != 0 {
		t.Fatalf("Results not matched, expected %s result %s", expect, result)
	}
}

func TestReverseParenthesesForTestCase2(t *testing.T) {
	input := "(abcd)"
	expect := "dcba"
	result := reverseParentheses(input)
	if strings.Compare(expect, result) != 0 {
		t.Fatalf("Results not matched, expected %s result %s", expect, result)
	}
}

func TestReverseParenthesesForTestCase3(t *testing.T) {
	input := "(ed(et(oc))el)"
	expect := "leetcode"
	result := reverseParentheses(input)
	if strings.Compare(expect, result) != 0 {
		t.Fatalf("Results not matched, expected %s result %s", expect, result)
	}
}
