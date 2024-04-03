package main

import (
	"fmt"
	"slices"
)

func main() {
	fmt.Println(wordBreak("arunprasad", []string{"arun", "rasad"}))
}

func wordBreak(s string, wordDict []string) bool {
	if len(s) == 0 {
		return true
	} else {
		for i := 1; i <= len(s); i++ {
			prefix := s[:i]

			if slices.Contains(wordDict, prefix) && wordBreak(s[i:], wordDict) {
				return true
			}
		}
		return false
	}
}
