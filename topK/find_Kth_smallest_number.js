const Heap = require('collections/heap');

const find_Kth_smallest_number = function(nums, k) {
  // TODO: Write your code her
  const maxHeap = new Heap([], null, ((a, b) => a - b));
  for(let i = 0; i < k; i++) {
    maxHeap.push(nums[i]);
  }

  for(let i = k ; i < nums.length; i++) {
    const currentMax = maxHeap.peek();
    if(nums[i] < currentMax) {
        maxHeap.pop();
        maxHeap.push(nums[i]);
    }
  }

  return maxHeap.pop();
};


console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 3)}`)
// since there are two 5s in the input array, our 3rd and 4th smallest numbers should be a '5'
console.log(`Kth smallest number is: ${find_Kth_smallest_number([1, 5, 12, 2, 11, 5], 4)}`)
console.log(`Kth smallest number is: ${find_Kth_smallest_number([5, 12, 11, -1, 12], 3)}`)
