package reverse_substring_between_parentheses

import (
	"container/list"
	"strings"
)

func reverseParentheses(s string) string {

	result := ""
	direction := 1
	pairArray := generatePairArray(s)

	for i := 0; i < len(s); i += direction {
		currentCharacter := string(rune(s[i]))
		if strings.Compare(currentCharacter, "(") == 0 || strings.Compare(currentCharacter, ")") == 0 {
			i = pairArray[i]
			direction = -direction
		} else {
			result += currentCharacter
		}
	}

	return result

}

func generatePairArray(s string) []int {
	queue := list.New()
	pairArray := make([]int, len(s))

	for i := 0; i < len(s); i++ {
		currentCharacter := string(rune(s[i]))
		if strings.Compare(currentCharacter, "(") == 0 {
			queue.PushBack(i)
		} else if strings.Compare(currentCharacter, ")") == 0 {
			lastMatchedParentheses := queue.Back()
			j, ok := lastMatchedParentheses.Value.(int)

			if !ok {
				panic("Error while retrieving parenthesis location")
			}

			queue.Remove(lastMatchedParentheses)
			pairArray[i] = j
			pairArray[j] = i
		} else {
			pairArray[i] = -1
		}
	}

	return pairArray
}
