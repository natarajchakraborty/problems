const Heap = require('collections/heap');

// const minimum_cost_to_connect_ropes = function(ropeLengths) {
//     const result = new Heap([], null, ((a, b) => b - a));;
//     const minHeap = new Heap([], null, ((a, b) => b - a));
//     ropeLengths.forEach(element => {
//         minHeap.push(element);
//     });

//     let smallest = minHeap.pop() + minHeap.pop();
//     result.push(smallest);
//     smallest = result.peek();
//     let i = 2;
//     let insert = false;
//     while(i < ropeLengths.length){
//         const current = minHeap.pop();
//         i++;
//         const currentProduct = current + smallest;
//         const second = minHeap.peek();
//         if(second) {
//             const nextProduct = current + second;
//             if(nextProduct <= currentProduct){
//                 smallest = nextProduct;
//                 minHeap.pop();
//                 insert = true;
//                 i++;
//             } else {
//                 smallest = current + smallest;
//             }
//         } else if(current){
//             smallest = current + smallest;
//         }
//         result.push(smallest);
//     }
//     const resultArr = result.toArray();
//     if(insert) {
//         const reducer = (accumulator, curr) => accumulator + curr;
//         resultArr.push(resultArr.reduce(reducer));
//         return resultArr.reduce(reducer);
//     } else {
//         const reducer = (accumulator, curr) => accumulator + curr;
//         return resultArr.reduce(reducer);
//     }
//   };
  
  function minimum_cost_to_connect_ropes(ropeLengths) {
    // add all ropes to the min heap
    const minHeap = new Heap(ropeLengths, null, ((a, b) => b - a));
  
    // go through the values of the heap, in each step take top (i.e., lowest) rope lengths from the min heap
    // connect them and push the result back to the min heap.
    // keep doing this until the heap is left with only one rope
    let result = 0;
    while (minHeap.length > 1) {
      const temp = minHeap.pop() + minHeap.pop();
      result += temp;
      minHeap.push(temp);
    }
  
    return result;
  }
  
 // console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5])}`)
  console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([3, 4, 5, 6])}`);
 // console.log(`Minimum cost to connect ropes: ${minimum_cost_to_connect_ropes([1, 3, 11, 5, 2])}`)
  