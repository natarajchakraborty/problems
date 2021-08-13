const Heap = require('../collections/Heap'); //http://www.collectionsjs.com

const find_k_largest_numbers = function(nums, k) {
    const result = []
    const maxHeap = new Heap.Heap([], null, ((a, b) => a - b));
    nums.forEach(element => {
        maxHeap.push(element);
    });

    for(let i = 0; i < k; i++){
        const top = maxHeap.pop();
        result.push(top);
    }
    return result;
  };
  
  
  console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`); // 12,11,5
  console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`); // 12,12,11
  