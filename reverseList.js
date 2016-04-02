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
var reverseList = function(head) {
    if(!head || !head.next)
        return head;
    var newhead = reverseList(head.next); //**
    head.next.next = head;
    head.next = null;
    return newhead; //** same newhead as **
};

//method 2
var reverseList_no_recursion = function(head) {
    if(!head)
        return head;
    var pre = head;
    var cur = head.next;
    while(cur){
        var tmp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tmp;
    }
    head.next = null;
    return pre;
};