/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head || !head.next) return true;
    
    const rev = (head) => {
        let cur = head, prev = null, next = null;
        while(cur){
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }
    
    let fast = head, slow = head, length = 0;;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
        length++
    }
    
    let mid = rev(slow);
    slow = head;
    
    while(length){
        length--
        if(mid.val !== slow.val) return false;
        mid = mid.next;
        slow = slow.next;
    }
    return true;
}