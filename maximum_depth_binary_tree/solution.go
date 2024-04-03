package maximum_dept_binary_tree

type TreeNode struct {
	Val   int
	Right *TreeNode
	Left  *TreeNode
}

func maxDepth(root *TreeNode) int {
	if root == nil {
		return 0
	}

	maxLeft := maxDepth(root.Left)
	maxRight := maxDepth(root.Right)

	depth := maxRight

	if maxLeft > maxRight {
		depth = maxLeft
	}
	return depth + 1
}

func isSameTree(p *TreeNode, q *TreeNode) bool {

	if p == nil && q == nil {
		return true
	} else if p != nil && q != nil && (p.Val == q.Val) {
		return isSameTree(p.Left, q.Left) && isSameTree(p.Right, q.Right)
	} else {
		return false
	}

}
