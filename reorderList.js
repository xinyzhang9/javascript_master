// Given a singly linked list L: L0→L1→…→Ln-1→Ln,
// reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→…

// You must do this in-place without altering the nodes' values.

// For example,
// Given {1,2,3,4}, reorder it to {1,4,2,3}.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(!head || !head.next)
        return;
    var mid = findmid(head);
    var tail = reverseList(mid.next);
    mid.next = null;
    merge(head,tail);
};

var findmid = function(head){
    var fast = head.next;
    var slow = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};

var merge = function(l1,l2){
    var index = 0;
    var dummy = new ListNode(-1);
    while(l1 && l2){
        if(index % 2 === 0){
            dummy.next = l1;
            l1 = l1.next;
        }else{
            dummy.next = l2;
            l2 = l2.next;
        }
        dummy = dummy.next;
        index++;
    }
    if(l1){
        dummy.next = l1;
    }
    if(l2){
        dummy.next = l2;
    }
    // return dummy.next;
};

var reverseList = function(head){
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
}