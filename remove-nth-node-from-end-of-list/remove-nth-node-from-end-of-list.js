/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let p1 = head, p2 = head, count = 0;
    while(count < n){
        p2 = p2.next;
        count++
    }
    if(!p2) return head.next;
    
    while(p2.next !== null){
        p1 = p1.next;
        p2=p2.next;
    }
    
    p1.next = p1.next.next
    return head
};