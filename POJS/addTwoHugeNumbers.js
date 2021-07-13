// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
    const convertListToArray = (l) => {
        let o = [];
        let current = l;
        while(current){
            o.push(current.value);
            current = current?.next;
      }
      const indexOfFirstNonZeroNumber = o.findIndex(e => e !== 0);
      if(indexOfFirstNonZeroNumber > 0) {
          for(let j = 0 ; j < indexOfFirstNonZeroNumber; j++) {
              o.shift();
          } 
      }
      return o;
    }
    
    let firstNumber = convertListToArray(a);
    let secondNumber = convertListToArray(b);
    const lengthNum1 = firstNumber.length;
    const lengthNum2 = secondNumber.length;
    const diffLen = Math.abs(lengthNum1 - lengthNum2);
    let carryOver = 0; 
    let i = Math.max(lengthNum1 - 1, lengthNum2 - 1);
    const result = [];
    while(i >= 0 || (i === -1 && carryOver > 0)) {
        if(i >= 0) {
            let num1;
            let num2;
            if(lengthNum1 > lengthNum2) {
                num1 = firstNumber[i];
                if(i - diffLen >= 0){
                    num2 = secondNumber[i - diffLen];
                } else {
                    num2 = "0";
                }
            } else {
                if(i - diffLen >= 0){
                    num1 = firstNumber[i - diffLen];
                } else {
                    num1 = "0";
                }
                num2 = secondNumber[i];
            }
            const added = parseInt(num1) + parseInt(num2) + carryOver;
            if(added > 9999) {
                const digit = added % 10000;
                carryOver =  Math.floor( added / 10000);
                result.push(digit);
            } else {
                carryOver = 0;
                result.push(added);
            }
            i--;
        } else {
            if(carryOver.length > 4) {
                for(let c = carryOver.toString().length - 5; c >= 0; c = c - 4){
                    result.push(carryOver.toString().substr(c, 4));
                }
            } else {
                result.push(carryOver);
            }
            carryOver = 0;
        }
    }
    const final = result.reverse();
    return final;
}

let a = {
    value: 9999,
    next:  {
      value: 9999,
      next: {
        value: 9999,
        next: {
            value: 9999,
            next: {
                value: 9999,
                next: {
                    value: 9999,
                    next: null
                  }
              }
          }
      }
    },
};

let b = {
    value: 9999,
    next:  {
      value: 9999,
      next: {
        value: 9999,
        next: {
            value: 9999,
            next: {
                value: 9999,
                next: {
                    value: 9999,
                    next: null
                  }
              }
          }
      }
    },
};
console.log(addTwoHugeNumbers(a,b))