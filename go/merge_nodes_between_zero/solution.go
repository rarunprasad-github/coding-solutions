package merge_nodes_between_zero

type ListNode struct {
	Val  int
	Next *ListNode
}

func mergeNodes(head *ListNode) *ListNode {
	var newHead *ListNode
	var currentNewPointer *ListNode
	leftPointer := head
	rightPointer := head.Next
	sum := 0

	for leftPointer != nil {
		if rightPointer.Val != 0 {
			sum += rightPointer.Val
			rightPointer = rightPointer.Next
		} else {
			temp := leftPointer
			if rightPointer.Next != nil {
				leftPointer = rightPointer
				rightPointer = leftPointer.Next
			} else {
				leftPointer = nil
			}
			temp.Val = sum
			temp.Next = nil
			sum = 0
			if newHead == nil {
				newHead = temp
				currentNewPointer = newHead
			} else {
				currentNewPointer.Next = temp
				currentNewPointer = currentNewPointer.Next
			}
		}
	}

	return newHead

}
