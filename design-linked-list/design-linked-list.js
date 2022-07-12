
var MyLinkedList = function(head, size) {
    this.head = (head === undefined ? null : head);
    this.size = (size === undefined ? 0 : size);
};

var ListNode = function(val, next) {
    this.val = (val === undefined ? 0 : val) 
    this.next = (next === undefined ? null : next)
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    const node = this.getNode(index);
    return node ? node.val : -1;
};

/** 
 * @param {number} index
 * @return {ListNode}
 */
MyLinkedList.prototype.getNode = function(index) {
    if (index <= this.size && index >= 0) {
        let i = 0;
        let cur = this.head;
        while (i !== index) {
            cur = cur.next;
            i++;
        }
        return cur;
    }
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const node = new ListNode(val);
    node.next = this.getNode(0);
    this.head = node;
    this.size++;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(this.size > 0) {
        this.getNode(this.size - 1).next = new ListNode(val);
        this.size++;
    } else {
        this.addAtHead(val);
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val);
    } 
    if (index === this.size) {
        this.addAtTail(val)
    } else if (index < this.size && index > 0) {
        const prev = this.getNode(index - 1);
        if (prev) {
            const node = new ListNode(val);
            node.next = prev.next;
            prev.next = node;
            this.size++;
        }
    }    
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index === 0) {
        this.head = this.head.next;
        this.size--;
    }
    if (index < this.size && index > 0) {
        this.getNode(index - 1).next = this.getNode(index + 1);
        this.size--;
    }
};