const find_max_in_bitonic_array = function(arr) {
    const result = binary_search(arr, Number.MAX_SAFE_INTEGER);
    if(result.length === 1){
        return arr[result[0]];
    } else {
        let first = Number.MIN_SAFE_INTEGER;
        let second = Number.MIN_SAFE_INTEGER;
        if(result[0] > -1){
            first = arr[result[0]];
        }
        if(result[1] > -1){
            second = arr[result[1]];
        }
        return Math.max(first, second);
    }
  };
  
  
  const binary_search = function(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let  mid  = Math.floor(start + (end-start)/2);
    let isAsc = arr[mid] < arr[mid+1];
    while(start <= end ){
        if(arr[mid] === key) {
            return [mid];
        }
        if(key > arr[mid]) {
            start = isAsc ? mid + 1 : start;
            end = isAsc ? end: mid - 1;
        } else if(key < arr[mid]) {
            end = isAsc ? mid - 1 : end;
            start = isAsc ? start: mid + 1;
        }
        mid  = Math.floor(start + (end-start)/2);
        isAsc = arr[mid] < arr[mid + 1]; // recalculating order
    }
    return [start, end]; // key to rememnber is that if elment is not found, than after search start will be celing(closest larger value than key) 
    // and end will be floor(closest smaller value than the key), since they are the two closest numbers at the two end of the key, the closer one is the answer
  };
  
  console.log(find_max_in_bitonic_array([1, 3, 8, 12, 4, 2]))
  console.log(find_max_in_bitonic_array([3, 8, 3, 1]))
  console.log(find_max_in_bitonic_array([1, 3, 8, 12]))
  console.log(find_max_in_bitonic_array([10, 9, 8]))
  