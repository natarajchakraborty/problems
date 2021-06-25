const find_smallest_substring = function(str, pattern) {
    let windowStart = 0,
    matched = 0,
    charFrequency = {},
    smallesWindowStart = windowStart,
    smallestWindowEnd = str.length - 1,
    matchedFound = false;

  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }
  
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (rightChar in charFrequency) {
      // decrement the frequency of matched character
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) { 
        matchedFound = true;
        if( (windowEnd - windowStart ) <= (smallestWindowEnd - smallesWindowStart) ) {
            smallesWindowStart = windowStart;
            smallestWindowEnd = windowEnd;
        }
        // shrink
        while(matched > 0 && windowStart <= windowEnd && str.length - windowStart > Object.keys(charFrequency).length) {
            leftChar = str[windowStart];
            windowStart += 1;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                  matched -= 1; // before putting the character back, decrement the matched count
                }
                charFrequency[leftChar] += 1; // put the character back
            }
            if ((matched === 0 || matched === Object.keys(charFrequency).length) && windowStart <= windowEnd) { 
                if( (windowEnd - windowStart ) < (smallestWindowEnd - smallesWindowStart) ) {
                    smallesWindowStart = windowStart;
                    smallestWindowEnd = windowEnd;
                }
            }
        }
    }
  }

  return matchedFound ? str.substring(smallesWindowStart, smallestWindowEnd+1) : "";

///  alternative implementation
///
//   var patternCharFreq = {};
//   var charfreq = {};
//   var window_s = 0;
//   var smallest_s = -1;
//   var smallest_end = -1;

//   for(var i = 0; i < pattern.length; i++) {
//       if (!(pattern[i] in patternCharFreq)) {
//         patternCharFreq[pattern[i]] =  0;
//   } 
//     patternCharFreq[pattern[i]] += 1;
//   }


//   const isHistogramFullyContained = function(hist1, hist2) {
//     return Object.keys(hist2).every( (x) => (x in hist1) && hist2[x] <= hist1[x]);
//   };

//   for(var window_end = 0; window_end < str.length; window_end++) {
//   if (!(str[window_end] in charfreq)) {
//       charfreq[str[window_end]] =  0;
//   } 
//   charfreq[str[window_end]] += 1;

//   if(isHistogramFullyContained(charfreq, patternCharFreq)) {
//     if(window_s > smallest_s) {
//       smallest_s = window_s;
//     }
//     if(window_end > smallest_end) {
//       smallest_end  = window_end;
//     }
//   }

//   // shift window until contained
//   while (isHistogramFullyContained(charfreq, patternCharFreq) && window_s <= window_end) {
//     // more, slide
//     charfreq[str[window_s]] -= 1;
//     if(charfreq[str[window_s]] === 0) {
//       delete charfreq[str[window_s]];
//     }
//     window_s += 1;
//     if(isHistogramFullyContained(charfreq, patternCharFreq)) {
//       if(window_s > smallest_s) {
//         smallest_s = window_s;
//       }
//     }
//   }
// }
// return str.substring(smallest_s, smallest_end+1);
}

console.log(find_smallest_substring("aabdec", "abc")); // "abdec"
console.log(find_smallest_substring("abdbca", "abc")); // "bca"
console.log(find_smallest_substring("adcad", "abc")); // ""