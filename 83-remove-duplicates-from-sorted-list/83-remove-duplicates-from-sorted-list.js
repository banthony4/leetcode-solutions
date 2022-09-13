/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function(head) {
    if(!head) return head
    let p = head
    
    while(p != null && p.next != null) {
        if(p.next.val === p.val) {
            p.next = p.next.next
        }else {
            p = p.next
        }
    }
    return head
};