const search_next_letter = function(letters, key) {
    if(!letters || !letters.length) {
        return null;
    }

    if(key < letters[0]){
        return letters[0];
    }

    if(key > letters[letters.length - 1]){
        return letters[0];
    }
    let idx = binary_search(letters, key);
    return letters[idx % letters.length]; // ***, since letters are circular 
  };
  
  // since the loop is running until 'start <= end', so at the end of the while loop, 'start === end+1'
  const binary_search = function(arr, key) {
    let start = 0;
    let end = arr.length - 1;
    let  mid  = 0;
    let isAsc = arr[start] < arr[end];
    while(start <= end ){
        mid  = Math.floor(start + (end-start)/2);
        if(key >= arr[mid]) {
            start = isAsc ? mid + 1 : start;
            end = isAsc ? end: mid - 1;
        } else if(key < arr[mid]) {
            end = isAsc ? mid - 1 : end;
            start = isAsc ? start: mid + 1;
        }

    }
    return start;
  };
  
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'f'))
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'b'))
  console.log(search_next_letter(['a', 'c', 'f', 'h'], 'm'))