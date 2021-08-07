const search_ceiling_of_a_number = function(arr, key) {
    // TODO: Write your code here
    if(!arr || !arr.length) {
        return -1;
    }

    if(key <= arr[0]){
        return 0;
    }

    if(key >= arr[arr.length - 1]){
        return  -1;
    }
    let idx = binary_search(arr, key);
    // let start = 0;
    // let end = arr.length - 1;
    // let  mid  = Math.floor(start + (end-start)/2);
    // let smallestDiff = Infinity;
    // while(start <= end ){
    //     if(arr[mid] >= key) {
    //         const diff = arr[mid] - key;
    //         if(diff <= smallestDiff ){
    //             smallestDiff = diff
    //             idx = mid;
    //         }
    //         if(!diff){
    //             break;
    //         }
    //     }
    //     if(key > arr[mid]) {
    //         start = mid + 1
    //     } else if(key < arr[mid]) {
    //         end =  mid - 1;
    //     }
    //     mid  = Math.floor(start + (end-start)/2);
    // }
    return idx;
  };
  
 // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
  const binary_search = function(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let  mid  = 0;
    let isAsc = arr[start] < arr[end];
    while(start <= end ){
        mid  = Math.floor(start + (end-start)/2);
        if(key > arr[mid]) {
            start = isAsc ? mid + 1 : start;
            end = isAsc ? end: mid - 1;
        } else if(key < arr[mid]) {
            end = isAsc ? mid - 1 : end;
            start = isAsc ? start: mid + 1;
        }
        if(arr[mid] === key) {
            return mid;
        }
    }
    return start; // only change
  };
  
  console.log(search_ceiling_of_a_number([4, 6, 10], 6))
  console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12))
  console.log(search_ceiling_of_a_number([4, 6, 10], 17))
  console.log(search_ceiling_of_a_number([4, 6, 10], -1))