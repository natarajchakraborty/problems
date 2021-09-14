const binary_search = function(arr, key) {
    let start = 0;
    let end = arr.length - 1;
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

  exports.binary_search = binary_search;
  // Note at the end of the search, if key is not found the start becomes the next 
  // smallest element which is bigger than key in the sorted array, and end becomes biggest number smaller than the key.
  // This property can be used to find next or prev problems.
  // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'

  console.log(binary_search([4, 6, 10], 10))
  console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5))
  console.log(binary_search([10, 6, 4], 10))
  console.log(binary_search([10, 6, 4], 4))
  