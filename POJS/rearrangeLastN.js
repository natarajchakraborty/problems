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

function rearrangeLastN(l, n) {
    let slowpointer = l;
    let fastpointer = l;
    let counter = 1;
    let prevSlowPointer = null;
    while(fastpointer.next){
        if(slowpointer) {
            prevSlowPointer = slowpointer;
        }
        fastpointer = fastpointer.next;
        if(counter >= n){
            slowpointer = slowpointer.next;
        }
        counter++;
    }
    const newHead = slowpointer;
    prevSlowPointer.next = null;
    fastpointer.next = l;
    l = newHead;
    return l;
}


var head = new Node(1)
 head.next = new Node(2)
 head.next.next = new Node(3)
 head.next.next.next = new Node(4)
 head.next.next.next.next = new Node(5)
//  head.next.next.next.next.next = new Node(6);
//  head.next.next.next.next.next.next = new Node(7);
//  head.next.next.next.next.next.next.next = new Node(8);
//  head.next.next.next.next.next.next.next.next = new Node(9);
//  head.next.next.next.next.next.next.next.next.next = new Node(10);
//  head.next.next.next.next.next.next.next.next.next.next = new Node(11);
//  head.next.next.next.next.next.next.next.next.next.next.next = new Node(12);

console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
console.log(`Nodes of reversed LinkedList are: ${rearrangeLastN(head, 3).get_list()}`);