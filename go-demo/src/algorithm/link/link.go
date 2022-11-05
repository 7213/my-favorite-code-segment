package link

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