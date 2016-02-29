// Remove all elements from a linked list of integers that have value val.
// Given 1->2->3->3->4->5->3, val = 3, you should return the list as 1->2->4->5
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
public class Solution {
    /**
     * @param head a ListNode
     * @param val an integer
     * @return a ListNode
     */
    public ListNode removeElements(ListNode head, int val) {
        // Write your code here
        if(head == null)
            return null;
        head.next = removeElements(head.next, val);
        return (head.val == val)?head.next:head;
    }
}