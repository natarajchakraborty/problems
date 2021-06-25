const smallest_subarray_with_given_sum = function(s, arr) {
    let smallest = arr.length;
    let window_s = 0;
    let transientSum = 0;
    for(window_e = 0; window_e < arr.length; window_e++) {
      transientSum += arr[window_e];
      while(transientSum >= s){
        if(window_e - window_s <= smallest) {
            smallest = window_e - window_s;
            transientSum = transientSum - arr[window_s];
            window_s++;
          } else 
          break;
        }
    }
    return smallest+1;
  };

console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]));

console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 8]));

console.log(smallest_subarray_with_given_sum(8, [3, 4, 1, 1, 6]));