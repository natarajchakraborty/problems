const Heap = require('../collections/Heap'); 

function nextLarger(a) {
    const result = []
    const maxHeap = new Heap.Heap([], null, ((a, b) => b.e - a.e));
    const minHeap = new Heap.Heap([], null, ((a, b) => b.i - a.i));
    a.forEach((element, index) => {
        maxHeap.push({e: element, i: index});
        minHeap.push({e: element, i: index});
    });

    console.log('max ', maxHeap);
    console.log('min ', minHeap);

    for(let i = 0; i < a.length; i++){
        const max = maxHeap.peek();
        let min = minHeap.peek();
        if(min.e === a[i]){
            minHeap.pop();
            min = minHeap.peek();
            if(min && min.e > a[i] && max.e > a[i]){
                result.push(a[Math.min(max.i, min.i)])
            } else if(min && min.e > a[i] && min.i > i) {
                result.push(min.e);
            } else if(max.e > a[i] && max.i > i){
                result.push(max.e);
            } else {
                result.push(-1);
            }
        }
    }
    return result;
}

console.log( nextLarger([7, 9, 2, 5, 1, 5, 8, 11, 3, 4]));
