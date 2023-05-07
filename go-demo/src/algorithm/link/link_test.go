package link

import "testing"

func Test_Link(t *testing.T) {
	node3 := ListNode{
		Val:  3,
		Next: nil,
	}
	node2 := ListNode{
		Val:  2,
		Next: &node3,
	}
	node1 := ListNode{
		Val:  1,
		Next: &node2,
	}

	if node1.Next.Val != 2 {
		t.Errorf("node1 expected next node val 2, but got %d", node1.Next.Val)
	}

	if node2.Next.Val != 3 {
		t.Errorf("node2 expected next node val 3, but got %d", node2.Next.Val)
	}

	if node3.Next != nil {
		t.Errorf("node3 expected next is nil, but got %T", node3.Next)
	}

	test_Traverse(t, &node1)
}

func test_Traverse(t *testing.T, head *ListNode) {
	Traverse(head)
}
