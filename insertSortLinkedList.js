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
var insertionSortList = function(head) {
    var dummy = new ListNode(-1);
    while(head){
        var node = dummy;
        while(node.next && node.next.val < head.val) {
            node = node.next;
        }
        var tmp = head.next;
        head.next = node.next;
        node.next = head;
        head = tmp;
    }
    return dummy.next;
};