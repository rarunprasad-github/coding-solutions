package average_wait_time

import "fmt"

func averageWaitingTime(customers [][]int) float64 {

	lastOrderFinishTime := 0
	totalWaitTime := 0

	for _, value := range customers {
		nextOrderFinishTime := value[1]

		if lastOrderFinishTime >= value[0] {
			nextOrderFinishTime += lastOrderFinishTime
		} else {
			nextOrderFinishTime += value[0] - 1
		}

		fmt.Println("Order wait time ", value[0], value[1])
		totalWaitTime += value[1]

		if value[0] <= lastOrderFinishTime {
			fmt.Println("Additional wait time ", value[0], lastOrderFinishTime, lastOrderFinishTime-value[0]+1)
			totalWaitTime += lastOrderFinishTime - value[0] + 1
		}

		lastOrderFinishTime = nextOrderFinishTime
	}

	return float64(totalWaitTime) / float64(len(customers))
}
