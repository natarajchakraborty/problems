const search_bitonic_array = function(arr, key) {
    // TODO: Write your code here
    const mid = find_max_index_in_bitonic_array(arr);
    // now search
    let found = binary_search(arr, key, 0, mid);
    if(found != -1)  {
        return found;
    } else {
       return binary_search(arr, key, mid + 1, arr.length - 1 );
    }
  };
  
  
  function find_max_index_in_bitonic_array(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      mid = Math.floor(start + (end - start) / 2);
      if (arr[mid] > arr[mid + 1]) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
  
    // at the end of the while loop, 'start === end' and would point to maximum
    return start;
  }

  const binary_search = function(arr, key, start, end) {
    let  mid  = Math.floor(start + (end-start)/2);
    let isAsc = arr[start] < arr[end];
    while(start <= end ){
        if(arr[mid] === key) {
            return mid;
        }
        if(key > arr[mid]) {
            start = isAsc ? mid + 1 : start;
            end = isAsc ? end: mid - 1;
        } else if(key < arr[mid]) {
            end = isAsc ? mid - 1 : end;
            start = isAsc ? start: mid + 1;
        }
        mid  = Math.floor(start + (end-start)/2);
    }
    return -1;
  };

  console.log(search_bitonic_array([1, 3, 8, 4, 3], 4))
  console.log(search_bitonic_array([3, 8, 3, 1], 8))
  console.log(search_bitonic_array([1, 3, 8, 12], 12))
  console.log(search_bitonic_array([10, 9, 8], 10))
  