const search_rotated_array = function(arr, key) {
    // TODO: Write your code here
    const maxIdx = find_max_index_in_rotated_array(arr);
    const result = binary_search(arr, key, 0, maxIdx);
    if(result !== -1) {
        return result;
    } else {
        return binary_search(arr, key, maxIdx + 1, arr.length - 1 );
    }
  }
  
  function find_max_index_in_rotated_array(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
      mid = Math.floor(start + (end - start) / 2);
      if(start === mid) {
          break;
      }
      if (arr[start] === arr[mid] && arr[end] === arr[mid]) { // handles duplicates, see last test case
        start += 1;
        end -= 1;
      } else if (arr[start] > arr[mid]) {
        end = mid;
      } else {
        start = mid;
      }
    }
  
    // at the end of the while loop, 'start === mid'
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

  // console.log(search_rotated_array([10, 15, 1, 3, 8], 3))
  // console.log(search_rotated_array([4, 5, 7, 9, 10, -1, 2], 9))
  // console.log(search_rotated_array([77, 65], 65));
  // console.log(search_rotated_array([3, 7, 3, 3, 3], 7));
  console.log(search_rotated_array([1, 3, 8, 10], 10));
  