const find_string_anagrams = function(str, pattern) {
    var patternCharFreq = {};
    var charfreq = {};
    var window_s = 0;
    var returnArr = [];

    for(var i = 0; i < pattern.length; i++) {
        if (!(pattern[i] in patternCharFreq)) {
          patternCharFreq[pattern[i]] =  0;
    } 
      patternCharFreq[pattern[i]] += 1;
    }

    const isHistogramContained = function(hist1, hist2) {
      for (const [key, value] of Object.entries(hist1)) {
        if(!(key in hist2) || hist1[key] > hist2[key]) {
          return false;
        }
      }
      return true;
    }

    const isHistogramEqual = function(hist1, hist2) {
      if(Object.keys(hist1).length !== Object.keys(hist2).length) {
        return false;
      }
      for (const [key, value] of Object.entries(hist1)) {
        if(!(key in hist2)) {
          return false;
        } else {
          if(hist2[key] !== value) {
            return false;
          }
        }

      }
      return true;
    };

    for(var window_end = 0; window_end < str.length; window_end++) {
    if (!(str[window_end] in charfreq)) {
        charfreq[str[window_end]] =  0;
    } 
    charfreq[str[window_end]] += 1;

    if(isHistogramEqual(charfreq, patternCharFreq)) {
      returnArr.push(window_s);
    }

    // shift window until contained
    while (!isHistogramContained(charfreq, patternCharFreq) && window_s <= window_end) {
      // more, slide
      charfreq[str[window_s]] -= 1;
      if(charfreq[str[window_s]] === 0) {
        delete charfreq[str[window_s]];
      }
      window_s += 1;
      if(isHistogramEqual(charfreq, patternCharFreq)) {
        returnArr.push(window_s);
      }
    }
  }
  return returnArr;
};


console.log(find_string_anagrams("ppqp", "pq")); // [1, 2]
console.log(find_string_anagrams("abbcabc", "abc")); // [2, 3, 4]