// Given a list, rotate the list to the right by k places, where k is non-negative.

// For example:
// Given 1->2->3->4->5->NULL and k = 2,
// return 4->5->1->2->3->NULL.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next || k === 0)
            return head;
        //length
        var len = 0;
        var cur = head;
        var fast = head;
        var slow = head;
        while(cur){
            len++;
            cur = cur.next;
        }
        k = k % len;
        if(k === 0)
            return head;
        
        while(k > 0){
            fast = fast.next;
            k--;
        }
        while(fast.next){
            fast = fast.next;
            slow = slow.next;
        }
        var newhead = slow.next;
        fast.next = head;
        slow.next = null;
        
        return newhead;
};