const count_rotations = function(arr) {
    // TODO: Write your code here
    const maxIndex = find_max_index_in_rotated_array(arr);
    if(maxIndex < arr.length - 1){
        return maxIndex + 1 ;
    } else {
        return 0;
    }
   
  };
  
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
    return arr[start] > arr[end] ? start: end;
  }
  
  console.log(count_rotations([10, 15, 1, 3, 8]))
  console.log(count_rotations([4, 5, 7, 9, 10, -1, 2]))
  console.log(count_rotations([1, 3, 8, 10]))
  console.log(count_rotations([3, 3, 7, 3]));
  