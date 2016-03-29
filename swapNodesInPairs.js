// Given a linked list, swap every two adjacent nodes and return its head.

// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.

// Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head)
        return null;
    var dummy = new ListNode(0);
    dummy.next = head;
    
    var p = dummy;
    var q = head;
    
    while(q && q.next){
        var nextStart = q.next.next;
        q.next.next = q;
        p.next = q.next;
        q.next = nextStart;
        p = q; //jump 2 nodes
        q = q.next;
    }
    return dummy.next;
};