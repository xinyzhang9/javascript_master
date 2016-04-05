// Linked List Cycle
// Given a linked list, determine if it has a cycle in it.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!head)
        return false;
    var fast = head;
    var slow = head;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
        
        if(slow === fast)
            return true;
    }
    return false;
};