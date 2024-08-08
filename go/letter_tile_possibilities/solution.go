package letter_tile_possibilities

func numTilePossibilities(tiles string) int {
	characterCountMap := make(map[rune]int)
	for _, value := range tiles {
		characterCountMap[value]++
	}
	return backTrack(characterCountMap)
}

func backTrack(characterCountMap map[rune]int) int {
	sum := 0
	for key, value := range characterCountMap {
		if value == 0 {
			continue
		}
		sum++
		characterCountMap[key]--
		sum += backTrack(characterCountMap)
		characterCountMap[key]++
	}
	return sum
}
