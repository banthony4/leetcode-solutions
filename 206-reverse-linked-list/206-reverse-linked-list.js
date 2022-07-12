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
var reverseList = function(head) {
    if(!head || !head.next) return head;
    
    let curr = head, prev = null, next = null;
    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;

    // if(head === null || head.next === null) return head;
    // let reversedSublist = reverseList(head.next)
    // head.next.next = head;
    // head.next = null;
    
    // return reversedSublist;
};