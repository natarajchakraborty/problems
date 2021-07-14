// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
    const toArray = (l) => {
        const ret = [];
        let head = {...l};
        while(head){
            ret.push(head.value);
            head = head.next;
        }
        return ret;
    }

    if(!l1 && !l2){
        return [];
    }else if(!l1) {
        return toArray(l2);
    } else if(!l2){
        return toArray(l1);
    }
    let l = {...l1};
    let p = {...l2};
    const result = [];
    while(l || p) {
        if(l && p){
          //console.log(l, p);
          if(l.value > p.value) {
            result.push(p.value);
            p = p.next;
          }else if(p.value > l.value) {
            result.push(l.value);
            l = l.next;
          }else if(p.value === l.value) {
            result.push(l.value);
            result.push(l.value);
            l = l.next;
            p = p.next;
          }
          
        } else {
            //console.log("end ", l, p);
            if(p){
               result.push(p.value);
               p = p.next;
            } else if(l) {
               result.push(l.value);
               l = l.next;
            }
        }
    }
    return result;
  }

  let a = null;

let b = {
    value: 1,
    next:  {
      value: 1,
      next: {
        value: 2,
        next: {
            value: 2,
            next: {
                value: 4,
                next: {
                    value: 7,
                    next: {
                        value: 7,
                        next: {
                            value: 8,
                            next: null
                          }
                      }
                  }
              }
          }
      }
    },
};
console.log(mergeTwoLinkedLists(a,b))