// Merge k Sorted Lists
// Given lists:

// [
//   2->4->null,
//   null,
//   -1->null
// ],
// return -1->2->4->null.


/**
 * Definition for ListNode.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int val) {
 *         this.val = val;
 *         this.next = null;
 *     }
 * }
 */ 
public class Solution {
    /**
     * @param lists: a list of ListNode
     * @return: The head of one sorted list.
     */
    public ListNode mergeKLists(List<ListNode> lists) {  
        // write your code here
        if(lists.size() == 0){
            return null;
        }
        PriorityQueue<ListNode> pq = new PriorityQueue<ListNode>(lists.size(),new Comparator<ListNode>(){
            public int compare(ListNode a, ListNode b){
                return a.val-b.val;
            }
        });
        for(ListNode list:lists){
            if(list!=null)
                pq.add(list);
        }
        ListNode dummy = new ListNode(0);
        ListNode p = dummy;
        while(pq.size()>0){
            ListNode tmp = pq.poll();
            p.next = tmp;
            if(tmp.next!=null){
                pq.add(tmp.next);
            }
            p = p.next;
        }
        return dummy.next;
        
    }
}

