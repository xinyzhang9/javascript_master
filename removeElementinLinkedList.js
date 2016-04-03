// Remove all elements from a linked list of integers that have value val.

// Example
// Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
// Return: 1 --> 2 --> 3 --> 4 --> 5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head)
        return null;
    var dummy = new ListNode(-1);
    dummy.next = head;
    var cur = dummy;
    while(cur.next){
        if(cur.next.val === val){
            cur.next = cur.next.next;
        }else{
            cur = cur.next;
        }
        
    }
    return dummy.next;
};