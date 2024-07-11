package winner_of_circular_game

import (
	"container/list"
	"fmt"
)

func findTheWinner(n int, k int) int {
	// new linked list
	queue := list.New()

	for i := 1; i <= n; i++ {
		queue.PushBack(i)
	}

	activePlayer := queue.Front()
	optimizedK := k
	kAdjustedOnce := false
	if optimizedK > n {
		optimizedK = (optimizedK) % n
		kAdjustedOnce = true
	}
	for gameCounter := 1; queue.Len() > 1; gameCounter++ {
		if gameCounter == optimizedK {
			nextActivePlayer := activePlayer.Next()
			fmt.Println(activePlayer.Value)
			queue.Remove(activePlayer)
			activePlayer = nextActivePlayer
			if optimizedK > queue.Len() || kAdjustedOnce {
				optimizedK = (k) % queue.Len()
				kAdjustedOnce = true
			}
			if activePlayer == nil {
				activePlayer = queue.Front()
			}
			gameCounter = 0
		} else if optimizedK == 0 {
			previousPlayer := activePlayer.Prev()
			if previousPlayer == nil {
				previousPlayer = queue.Back()
			}
			queue.Remove(previousPlayer)
			gameCounter = 0
		} else {
			if activePlayer.Next() == nil {
				activePlayer = queue.Front()
			} else {
				activePlayer = activePlayer.Next()
			}
		}
	}

	frontValue := queue.Front().Value
	if intValue, ok := frontValue.(int); ok {
		return intValue
	} else {
		return -1
	}

}
