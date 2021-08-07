function search_floor_of_a_number(arr, key) {
    if(!arr || !arr.length) {
        return -1;
    }

    if(key <= arr[0]){
        return -1;
    }

    if(key >= arr[arr.length - 1]){
        return  arr.length - 1;
    }
    let idx = binary_search(arr, key);
    return idx--;
}

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
    return end; // onnly change
  };

console.log(search_floor_of_a_number([4, 6, 10], 6));
console.log(search_floor_of_a_number([1, 3, 8, 10, 15], 12));
console.log(search_floor_of_a_number([4, 6, 10], 17));
console.log(search_floor_of_a_number([4, 6, 10], -1));