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
const middleNode = function(head) {
    let last = head;
    let middle = head;
    while(last && last.next){
        last = last.next.next;
        middle = middle.next
    }
    return middle;
};