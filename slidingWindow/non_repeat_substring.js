// length of the longest substring, which has no repeating characters.
const non_repeat_substring = function(str) {
    let transientDistinctChars = {};
    let window_s = 0;
    let longest = -1;
    for(window_e = 0; window_e < str.length; window_e++) {
      if(transientDistinctChars[str[window_e]]) {
        transientDistinctChars[str[window_e]] += 1;
      } else {
        transientDistinctChars[str[window_e]] = 1;
      }
      // if all distinct
      const totalCharCount = Object.keys(transientDistinctChars).reduce((a, b) =>  a + transientDistinctChars[b], 0);
      const distinctCharCount = Object.keys(transientDistinctChars).length;
      while(distinctCharCount <= totalCharCount){
        if(distinctCharCount === totalCharCount) {
            longest = Math.max(window_e - window_s + 1, longest);
          } else if(distinctCharCount < totalCharCount) {
            // shrink
            if(transientDistinctChars[str[window_s]] > 1) {
              transientDistinctChars[str[window_s]] -= 1;
            } else {
              delete transientDistinctChars[str[window_s]];
            }
            window_s++;
          }
          break;
        }
    }
    return longest;
}

console.log(non_repeat_substring("aabccbb")); // 3, "abc"
console.log(non_repeat_substring("abbbb")); // 2. "ab"
console.log(non_repeat_substring("abccde")); // 3, "abc" & "cde"