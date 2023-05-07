package link

/* 基础链表 */
type ListNode struct {
	Val  int64
	Next *ListNode
}

func Traverse(head *ListNode) {
	next := head
	for {
		if head.Next != nil {
			next = next.Next
		}
		break
	}
}
/* 基础链表 */

/* 反转链表 */
type LNode struct {
	Data interface{}
	Next *LNode
}

func NewNode() *LNode {
	return &LNode{}
}

func CreateNode(node *LNode, max int) {
	cur := node
	for i := 1; i < max; i++ {
		cur.Next = &LNode{}
		cur.Next.Data = i
		cur = cur.Next
	}
}

func Reverse(node *LNode) {
	if node == nil || node.Next == nil {
		return
	}
	var pre *LNode
	var cur *LNode
	next := node.Next
	for next != nil {
		cur = next.Next
		next.Next = pre
		pre = next
		next = cur
	}
	node.Next = pre
}
/* 反转链表 */
