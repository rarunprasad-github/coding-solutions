package maximum_score_from_removing_substrings

import (
	"strings"
)

func maximumGain(s string, x int, y int) int {

	totalPoints := 0
	input := s

	if y > x {
		temp := x
		x = y
		y = temp

		runes := []rune(s)
		for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
			runes[i], runes[j] = runes[j], runes[i]
		}
		input = string(runes)
	}

	aCount := 0
	bCount := 0

	for _, value := range input {
		currentCharacter := string(value)
		if strings.Compare(currentCharacter, "a") == 0 {
			aCount++
		} else if strings.Compare(currentCharacter, "b") == 0 {
			if aCount > 0 {
				aCount--
				totalPoints += x
			} else {
				bCount++
			}
		} else {
			totalPoints += min(aCount, bCount) * y
			aCount = 0
			bCount = 0
		}
	}

	totalPoints += min(aCount, bCount) * y

	return totalPoints
}
