package main

import "fmt"

func main() {
	fmt.Println(rob([]int{100, 2, 3, 1}))
}

func rob(nums []int) int {

	if len(nums) == 0 {
		return 0
	} else {
		previousValue := 0
		previousToPreviousValue := 0

		for _, value := range nums {
			tmp := previousValue
			if previousToPreviousValue+value > previousValue {
				previousValue = previousToPreviousValue + value
			}
			previousToPreviousValue = tmp
		}
		return previousValue
	}
}
