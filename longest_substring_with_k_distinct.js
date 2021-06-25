const longest_substring_with_k_distinct = function(str, k) {
    let transientDistinctChars = {};
    let window_s = 0;
    let longest = -1;
    for(window_e = 0; window_e < str.length; window_e++) {
      if(transientDistinctChars[str[window_e]]) {
        transientDistinctChars[str[window_e]] += 1;
      } else {
        transientDistinctChars[str[window_e]] = 1;
      }

      while(Object.keys(transientDistinctChars).length >= k){
        if(Object.keys(transientDistinctChars).length == k) {
            longest = window_e - window_s + 1;
          } else if(Object.keys(transientDistinctChars).length > k) {
            delete transientDistinctChars[str[window_s]];
            window_s++;
          }
          break;
        }
    }
    return longest;
  };

  console.log(longest_substring_with_k_distinct("araaci", 2)); // 4, "araa"
  console.log(longest_substring_with_k_distinct("araaci", 1)); // 2. "aa"
  console.log(longest_substring_with_k_distinct("cbbebi", 3)); // 5, "cbbeb" & "bbebi"