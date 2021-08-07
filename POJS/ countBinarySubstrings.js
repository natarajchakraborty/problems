/**
 * @param {string} s
 * @return {number}
 */
 var countBinarySubstrings = function(s) {
    let noSubstring = 0;
    let p = 0;
    while(p < s.length) {
        let zeroCount = countNumberOfConsequetiveZerosOrOnesAtP(s, p, '0');
        let oneCount = countNumberOfConsequetiveZerosOrOnesAtP(s, p, '1');
        if(zeroCount) {
            oneCount = countNumberOfConsequetiveZerosOrOnesAtP(s, p + zeroCount, '1');
            if(zeroCount <= oneCount) {
                const substringSize = 2 * Math.min(zeroCount, oneCount);
                noSubstring = substringSize ? noSubstring + substringSize / 2: noSubstring;
                p = p + zeroCount;
            } else p++;
        } else if(oneCount) {
            zeroCount = countNumberOfConsequetiveZerosOrOnesAtP(s, p + oneCount, '0');
            if(oneCount <= zeroCount){
                const substringSize = 2 * Math.min(zeroCount, oneCount);
                noSubstring = substringSize ? noSubstring + substringSize / 2: noSubstring;
                p = p + oneCount;
            } else p++;
        }
    }
    return noSubstring;
};

var countNumberOfConsequetiveZerosOrOnesAtP = function(s, q, number) {
    let p = q;
    while(p < s.length) {
        if(s[p] !== number) {
            break;
        }
        p++;
    }
    return p - q;
}

console.log(countBinarySubstrings("00110011"));
//console.log(countBinarySubstrings("10101"));
//console.log(countBinarySubstrings("00110"));


/*
var countBinarySubstrings = function(s) {
    let curr = 1, prev = 0, ans = 0
    for (let i = 1; i < s.length; i++)
        if (s[i] === s[i-1]) curr++
        else ans += Math.min(curr, prev), prev = curr, curr = 1
    return ans + Math.min(curr, prev)
}; 
*/