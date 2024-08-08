package longest_common_prefix

type Node struct {
	Char      string
	Children  [26]*Node
	Childrens int
	EOW       bool
}

func NewNode(char string) *Node {
	node := &Node{Char: char}
	for i := 0; i < 26; i++ {
		node.Children[i] = nil
	}
	node.Childrens = 0
	return node
}

type Trie struct {
	RootNode *Node
}

func (n *Node) FindNextIndex() int {
	index := -1
	for i := 0; i < 26; i++ {
		if n.Children[i] != nil {
			return i
		}
	}
	return index
}

func NewTrie() *Trie {
	root := NewNode("\000")
	return &Trie{RootNode: root}
}

func (t *Trie) Insert(word string) {
	current := t.RootNode
	if len(word) == 0 {
		current.Childrens = current.Childrens + 1
	}
	for i := 0; i < len(word); i++ {
		index := word[i] - 'a'
		if current.Children[index] == nil {
			current.Children[index] = NewNode(string(word[i]))
			current.Childrens = current.Childrens + 1
		}
		current = current.Children[index]
	}
	current.EOW = true
}

func (t *Trie) FindLongestPrefix() string {
	longestPrefix := ""
	current := t.RootNode
	isExitSatisfied := false

	for !current.EOW && current.Childrens == 1 && !isExitSatisfied {
		next := current.FindNextIndex()
		if next >= 0 {
			current = current.Children[next]
			longestPrefix += current.Char
		} else {
			isExitSatisfied = true
		}
	}
	return longestPrefix
}

func longestCommonPrefix(strs []string) string {
	trie := NewTrie()
	for _, word := range strs {
		trie.Insert(word)
	}
	return trie.FindLongestPrefix()
}
