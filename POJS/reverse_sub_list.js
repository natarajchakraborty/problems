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
  
  const reverse_sub_list = function(head, p, q) {
    let current = {...head};
    let counter = 1;
    let prev = null;
    let sublistPrev = null;
    let sublistNext = null;
    let subListFirstNode = null;
    while(counter <= q) {
        if(counter >= p && counter <= q){
            // sublist
            const temp = current.next;
            if(counter === q){
                sublistNext = temp;
            }
            if(counter === p) {
                subListFirstNode = current;
            }
            current.next = sublistPrev;
            sublistPrev = current;
            current = temp;
        } else {
            prev = current;
            current = current.next;
        }
        counter++;
    }
    prev.next = sublistPrev;
    subListFirstNode.next = sublistNext;
    return new Node(prev.value, prev.next);
  };
  
  
  var head = new Node(1)
  head.next = new Node(2)
  head.next.next = new Node(3)
  head.next.next.next = new Node(4)
  head.next.next.next.next = new Node(5)
  
  console.log(`Nodes of original LinkedList are: ${head.get_list()}`)
  console.log(`Nodes of reversed LinkedList are: ${reverse_sub_list(head, 2, 4).get_list()}`);
  