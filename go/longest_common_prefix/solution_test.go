package longest_common_prefix

import "testing"

func TestLongestCommonPrefixForEmptyArray(t *testing.T) {
	input := []string{}
	expect := ""
	result := longestCommonPrefix(input)
	if expect != result {
		t.Fatalf("Results not matched, expected %s result %s", expect, result)
	}
}

func TestLongestCommonPrefixForArrayWithEmptyString(t *testing.T) {
	input := []string{"a", ""}
	expect := ""
	result := longestCommonPrefix(input)
	if expect != result {
		t.Fatalf("Results not matched, expected %s result %s", expect, result)
	}
}

func TestLongestCommonPrefixForArrayWithValidCases(t *testing.T) {
	input := []string{"a", "a"}
	expect := "a"
	result := longestCommonPrefix(input)
	if expect != result {
		t.Fatalf("Results not matched, expected %s result %s", expect, result)
	}

	input = []string{"ab", "ab"}
	expect = "ab"
	result = longestCommonPrefix(input)
	if expect != result {
		t.Fatalf("Results not matched, expected %s result %s", expect, result)
	}

	input = []string{"acb", "ab"}
	expect = "a"
	result = longestCommonPrefix(input)
	if expect != result {
		t.Fatalf("Results not matched, expected %s result %s", expect, result)
	}
}
