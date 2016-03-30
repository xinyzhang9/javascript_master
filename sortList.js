// Sort a linked list in O(n log n) time using constant space complexity.

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
var sortList = function(head) {
    if(!head || !head.next)
        return head;
    var mid = findmid(head);
    var right = sortList(mid.next);
    mid.next = null;
    var left = sortList(head);
    return merge(left,right);
};

var findmid = function(head){
    var slow = head;
    var fast = head.next;
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
}

var merge = function(head1,head2){
    var dummy = new ListNode(-1);
    var tail = dummy;
    while(head1 && head2){
        if(head1.val < head2.val){
            tail.next = head1;
            head1 = head1.next;
        }else{
            tail.next = head2;
            head2 = head2.next;
        }
        tail = tail.next;
    }
    if(head1)
        tail.next = head1;
    if(head2)
        tail.next = head2;
    return dummy.next;
}