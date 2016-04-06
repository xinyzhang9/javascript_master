// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

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
var detectCycle = function(head) {
    if(!head)
        return null;
    var slow = head;
    var fast = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow){
            var p = head;
            while(p !== slow){
                p = p.next;
                slow = slow.next;
            }
            return slow;
        }
    }
    return null;
};