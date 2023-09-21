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
    let current=head ;
    let position=0;
    while(current){
        position++ ;
        current = current.next ;
    }
    position = Math.floor(position/2); 
    current = head ;
    for(let i=0;i<position;i++){
        current = current.next;
 }
 return current;  
};