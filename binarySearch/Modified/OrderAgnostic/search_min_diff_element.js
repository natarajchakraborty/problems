const search_min_diff_element = function(arr, key) {

    const result = binary_search(arr, key);
    if(result.length === 1){
        return arr[result[0]];
    } else {
        const first = arr[result[0]];
        const second = arr[result[1]];
        return Math.abs(key - first) <= Math.abs(key - second) ? arr[result[0]]: arr[result[1]];
    }
  };
  
  const binary_search = function(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let  mid  = Math.floor(start + (end-start)/2);
    let isAsc = arr[start] < arr[end];
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
    }
    return [start, end]; // key to rememnber is that if elment is not found, than after search start will be celing(closest larger value than key) 
    // and end will be floor(closest smaller value than the key), since they are the two closest numbers at the two end of the key, the closer one is the answer
  };
  
  console.log(search_min_diff_element([4, 6, 10], 7))
  console.log(search_min_diff_element([4, 6, 10], 4))
  console.log(search_min_diff_element([1, 3, 8, 10, 15], 12))
  console.log(search_min_diff_element([4, 6, 10], 17))
  