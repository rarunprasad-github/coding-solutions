package tuple_with_same_product

func tupleSameProduct(nums []int) int {
	productMap := make(map[int]int)
	for i := 0; i < len(nums); i++ {
		for j := 0; j < i; j++ {
			product := nums[i] * nums[j]
			productMap[product]++
		}
	}
	tuples := 0
	for _, count := range productMap {
		tuples += (count * (count - 1) / 2) * 8
	}
	return tuples
}
