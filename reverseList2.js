// Reverse a linked list from position m to n. Do it in-place and in one-pass.

// For example:
// Given 1->2->3->4->5->NULL, m = 2 and n = 4,

// return 1->4->3->2->5->NULL.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    if(m >= n || !head)
        return head;
    var dummy = new ListNode(-1);
    dummy.next = head;
    head = dummy;
    for(var i = 1; i < m; i++){
        if(!head)
            return null;
        head = head.next;
    }
    var preM = head;
    var mNode = head.next;
    var nNode = mNode;
    var postN = nNode.next;
    for(var i = m; i < n; i++){
        if(!postN)
            return null;
        var tmp = postN.next;
        postN.next = nNode; //n is the head of the reversed segment
        nNode = postN; //there is a cycle here, draw to see it
        postN = tmp; //postN is the head of the remaining tail
    }
    mNode.next = postN; //mNode now is the tail of the reversed segment, connect it to the remaining list
    preM.next = nNode; //nNode is the head of the reversed segment, connect preM to it
    
    return dummy.next;
    
};