const Heap = require('collections/heap'); //http://www.collectionsjs.com

class Interval {
    constructor(start, end) {
      this.start = start;
      this.end = end;
    }
  };
  
  
  const find_next_interval = function(intervals) {
    result = [];
    const minHeap = new Heap([], null, ((a, b) => b.interval.start - a.interval.end));
    for(let i = 0; i< intervals.length; i++) {
        minHeap.push({interval: intervals[i], index: i});
    }
    for(let i = 0; i < intervals.length; i++) {
        const currentMinHeap = minHeap.constructClone(minHeap.content);
        let currentMin = currentMinHeap.pop();
        while(currentMin && intervals[i].end > currentMin.interval.start){
            currentMin = currentMinHeap.pop();
        }
        if(currentMin && intervals[i].end <= currentMin.interval.start){
            result.push(currentMin.index);
        } else {
            result.push(-1);
        }
    }
    return result;
  };
  
  
  result = find_next_interval(
    [new Interval(2, 3), new Interval(3, 4), new Interval(5, 6)])
  console.log(`Next interval indices are: ${result}`)
  
  
  result = find_next_interval(
    [new Interval(3, 4), new Interval(1, 5), new Interval(4, 6)])
  console.log(`Next interval indices are: ${result}`)
  