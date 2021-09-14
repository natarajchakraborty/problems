function decodeString(s) { // "xs2[b3[abc4[da]asd5[na]]]nnb3[nmn3[sas]]"
    const numberStack = [];
    const opString = [];
    for(let i = 0; i < s.length; i++){
        const match = s.substring(i).match(/^(\d+).*/);
        if(!match && s[i] !== ']'){
            opString.push(s[i]);
        } else if(match && s[i] !== ']'){
            numberStack.push({k: parseInt(match[1]), index: opString.length});
            i = i + match[1].length;
        } else if(s[i] === ']'){
            // expand
            const substrIndx = numberStack.pop();
            // extract subarray from opString index onwards, multiply by k, push to opString
            const substr = opString.slice(substrIndx.index);
            const toAppend = [];
            for(let j = 1 ; j < substrIndx.k; j++){
                toAppend.push(...substr);
            }
            opString.push(...toAppend);
        }
    }
    return opString.join('');
}

console.log(decodeString("xs2[b3[abc4[da]asd5[na]]]nnb3[nmn3[sas]]"));

// number nstack
// char cstack

// 2/[ , 3[, 4[, ], 5[, ], ], ]


// cstack = [xsbabcda]
// nstack = [2{index= 2}, 3{index=3}, 4{6}, ']'... <= encounrters close expand

// cstack = [xsbabcdadadada]
// nstack = [2{index= 2}, 3{index=3}, <= continue intesrting

// cstack = [xsbabcdadadadaasd]
// nstack = [2{index= 2}, 3{index=3}, 5{index=17}

// cstack = [xsbabcdadadadaasdna]
// nstack = [2{index= 2}, 3{index=3}, 5{index=17}, ']'... <= encounrters close expand

// castack = [xsbabcdadadadaasdnanananana]

// nstack = [2{index= 2}, 3{index=3},  ']'... <= encounrters close expand

// cstack = [xsbabcdadadadaasdnananananaabcdadadadaasdnananananaabcdadadadaasdnanananana]

// nstack = [2{index= 2},  ']'... <= encounrters close expand

// cstack = [xsbabcdadadadaasdnananananaabcdadadadaasdnananananaabcdadadadaasdnananananababcdadadadaasdnananananaabcdadadadaasdnananananaabcdadadadaasdnanananana]

// nstack = []

// continue inserting chars from the last read chars

// cstack = [xsbabcdadadadaasdnananananaabcdadadadaasdnananananaabcdadadadaasdnananananababcdadadadaasdnananananaabcdadadadaasdnananananaabcdadadadaasdnananananannb]

// nstack = [3{index=length of castack}]