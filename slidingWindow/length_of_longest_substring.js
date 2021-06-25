const length_of_longest_substring = function (arr, k) {
  let countOfZerosInWindow = 0;
  let window_s = 0;
  let longest = -1;

  for (window_e = 0; window_e < arr.length; window_e++) {
    if (arr[window_e] === 0) {
      countOfZerosInWindow++;
    }
    const currentWindowLength = window_e - window_s + 1;
    if (countOfZerosInWindow <= k && currentWindowLength > longest) {
      longest = currentWindowLength;
    } else if (countOfZerosInWindow > k) {
      //slide
      if (arr[window_s] === 0) {
        countOfZerosInWindow--;
      }
      window_s++;
    }
  }

  return longest;
};

console.log(length_of_longest_substring([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2)); // 6
console.log(length_of_longest_substring([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)); // 9