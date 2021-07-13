import test from "/Users/nataraj/exp/problems/POJS/test-21.mjs";

function isListPalindrome(l) {
    const printList = function(head) {
      let current = {...head};
      let list = [];
      if(head) {
        list.push(head.value);
      }
      
      while(current && current.next){
        current = current.next;
        list.push(current.value);
      }
      console.log(list.join(','));
    }
    const find_middle_of_linked_list = function(head) {
      let current = {...head};
      let mid = {...head};
      let midmid = {...head};
      let stack = [];
      while(current && current.next && current.next.next){
        current = current.next.next;
        midmid = mid;
        stack.push(midmid.value);
        mid = mid.next;
      }
      if(current.next && !current.next.next){
        stack.push(mid.value);
        mid = mid.next;
      } else {
        mid = mid.next;
      }

      return [mid, stack];
    }
    //  console.log(test);
    //  //create list 
    //  let head = {
    //   value: test.input.l[0],
    //   next:  null,
    //  };
    //  let current = head;
    //  for(let i = 1; i< test.input.l.length; i++){
    //   current.next = {
    //     value: test.input.l[i],
    //     next:  null,
    //   }
    //   current = current.next;
    //  }
    // l = head;
    if(!l){
      return true;
    }
    if(l && !l.next){
      return true;
    }
    if(l.next && !l.next.next) {
      if(l.value === l.next.value) {
        return true;
      } else {
        return false;
      }
    }
     let [mid, stack] = find_middle_of_linked_list(l);
     let midptr = {...mid};
      
      while(midptr.next) {
        if(stack[stack.length - 1] === midptr.value){
          stack.pop();
        }
        midptr = midptr.next;
      } 
      if(midptr !== undefined && midptr.value !== undefined) {
        if(stack[stack.length - 1] === midptr.value){
          stack.pop();
        }
      }
      return stack.length === 0;
    
    }

    console.log(isListPalindrome( {
        value: -434,
        next:  {
          value: -434,
          next:
        },
    })); // true