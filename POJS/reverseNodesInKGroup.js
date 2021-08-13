// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//


class Node {
    constructor(value, next=null){
      this.value = value;
      this.next = next;
    }
    get_list() {
        let result = "";
        let temp = this;
        while (temp !== null) {
          result += temp.value + " ";
          temp = temp.next;
        }
        return result;
      }
};

function reverseNodesInKGroups(l, k) {
    if(k <= 1){
        return l;
    }
    let head = {...l};
    let next = head;
    let newHead = null;
    let prevEnd = null;
    while(head){
       let itsOver = false;
       for(let i = 0; i < k; i++){
           // terminate if no k elements
           if(!next){
               itsOver = true;
               break;
           }
            next = next.next;
       }
       if(itsOver){
           break;
       }
       const [startOfReversedList, endOfReversedList] = reverseKNodesFrom(head, k);
       endOfReversedList.next = next;
       if(prevEnd){
           prevEnd.next = startOfReversedList;
       }
       head = next;
       if(!newHead){
           newHead = startOfReversedList;
       }
       prevEnd = endOfReversedList;
    }
    return newHead;
 }
 
 function reverseKNodesFrom(start, k) {
     let counter = 0;
     let current = {...start};
     let first = null
     let end = null;
     let sublistPrev = null;
     while(counter < k) {
         // sublist
         const temp = current.next;
         if(counter === k - 1){
             first = temp;
         }
         if(counter === 0) {
             end = current;
         }
         current.next = sublistPrev;
         sublistPrev = current;
         current = temp;
         counter++;
     }
     return [sublistPrev, end];
 }

 var head = new Node(1)
 head.next = new Node(2)
 head.next.next = new Node(3)
 head.next.next.next = new Node(4)
 head.next.next.next.next = new Node(5)
 head.next.next.next.next.next = new Node(6);
 head.next.next.next.next.next.next = new Node(7);
 head.next.next.next.next.next.next.next = new Node(8);
 head.next.next.next.next.next.next.next.next = new Node(9);
 head.next.next.next.next.next.next.next.next.next = new Node(10);
 head.next.next.next.next.next.next.next.next.next.next = new Node(11);
 head.next.next.next.next.next.next.next.next.next.next.next = new Node(12);
 
 console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
 console.log(`Nodes of reversed LinkedList are: ${reverseNodesInKGroups(head, 3).get_list()}`);