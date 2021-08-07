class ArrayReader {

  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length)
      return Number.MAX_SAFE_INTEGER;
    return this.arr[index]
  }
};


const search_in_infinite_array = function(reader, key) {
  let start = 0;
  let end = 1;
  while(reader.get(end) < key) {
    end = end * 2;
  }

  return binary_search(reader, key, start, end);
};

const binary_search = function(reader, key, start, end) {
    let  mid  = Math.floor(start + (end-start)/2);
    let isAsc = reader.get(start) < reader.get(end);
    while(start <= end ){
        const curr = reader.get(mid);
        if(curr === key) {
            return mid;
        }
        if(key > curr) {
            start = isAsc ? mid + 1 : start;
            end = isAsc ? end: mid - 1;
        } else if(key < curr) {
            end = isAsc ? mid - 1 : end;
            start = isAsc ? start: mid + 1;
        }
        mid  = Math.floor(start + (end-start)/2);
    }
    return -1;
  };

var reader = new ArrayReader([4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]);
console.log(search_in_infinite_array(reader, 16))
console.log(search_in_infinite_array(reader, 11))
reader = new ArrayReader([1, 3, 8, 10, 15])
console.log(search_in_infinite_array(reader, 15))
console.log(search_in_infinite_array(reader, 200))
