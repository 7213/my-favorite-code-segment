package link
import "testing"

func TestLink(t *testing.T) {
	node3 := ListNode {
		Val: 3,
		Next: nil,
	}
	node2 := ListNode {
		Val: 2,
		Next: &node3,
	}
	node1 := ListNode {
		Val: 1,
		Next: &node2,
	}

	Traverse(&node1)



}