const find_word_concatenation = function(str, patterns) {
    let windowStart = 0,
    matched = 0,
    charFrequency = {},
    jumps = patterns[0].length;
    const results = [];
    patterns.forEach(pattern => {
        for (i = 0; i < pattern.length; i++) {
            const chr = pattern[i];
            if (!(chr in charFrequency)) {
              charFrequency[chr] = 0;
            }
            charFrequency[chr] += 1;
          }
    });

  
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (rightChar in charFrequency) {
      // decrement the frequency of matched character
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    } else {
        windowStart = windowEnd + 1;
        matched = 0;
    }

    if (matched === Object.keys(charFrequency).length) { 
        if(Object.keys(charFrequency).every(key => charFrequency[key] === 0)){
            results.push(windowStart);
        }
        for(let i = windowStart; i < jumps; i++ ) {
            const leftChar = str[i];
            windowStart++;
            if (leftChar in charFrequency) {
                if (charFrequency[leftChar] === 0) {
                  matched -= 1; // before putting the character back, decrement the matched count
                }
                charFrequency[leftChar] += 1; // put the character back
            }
        }
        if(Object.keys(charFrequency).every(key => charFrequency[key] === 0)){
            !results.includes(windowStart) && results.push(windowStart);
        }
    }
  }

  return results;
}

console.log(find_word_concatenation("catfoxcat", ["cat", "fox"])); // [0, 3]
console.log(find_word_concatenation("catcatfoxfox", ["cat", "fox"])); // [3]

/* Alternative:
const find_word_concatenation = function(str, patterns) {
    var patternCharFreq = {};
    var charfreq = {};
    var window_s = 0;
    var startingIndex = [];
    var totalLength = 0;

    for(var i = 0; i < patterns.length; i++) {
      for(var j = 0; j < patterns[i].length; j++){
          if (!(patterns[i][j] in patternCharFreq)) {
               patternCharFreq[patterns[i][j]] =  0;
            }
            patternCharFreq[patterns[i][j]] += 1;
        }
        totalLength += patterns[i].length;
      } 


    const isHistogramEqual = function(hist1, hist2) {
      return Object.keys(hist2).every( (x) => (x in hist1) && hist2[x] === hist1[x]);
    };

    const doesContainsAllStrings = function(substr, patterns){
      return patterns.every((x) => substr.includes(x));
    }

    for(var window_end = 0; window_end < str.length; window_end++) {
    if (!(str[window_end] in charfreq)) {
        charfreq[str[window_end]] =  0;
    } 
    charfreq[str[window_end]] += 1;

    if(isHistogramEqual(charfreq, patternCharFreq) && (window_end + 1) - window_s === totalLength && doesContainsAllStrings(str.substr(window_s, window_end + 1) , patterns)) {
      startingIndex.push(window_s);
    }

    // shift window until contained
    while (window_s <= window_end &&  doesContainsAllStrings(str.substr(window_s, window_end +1) , patterns)) {
      // more, slide
      charfreq[str[window_s]] -= 1;
      if(charfreq[str[window_s]] === 0) {
        delete charfreq[str[window_s]];
      }
      window_s += 1;
      if(isHistogramEqual(charfreq, patternCharFreq) && doesContainsAllStrings(str.substr(window_s, window_end+ 1) , patterns)) {
        startingIndex.push(window_s);
      }
    }
  }
  return startingIndex;
};

*/