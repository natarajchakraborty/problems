const Heap = require('collections/heap');

class Point {

    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    get_point() {
      return "[" + this.x + ", " + this.y + "] ";
    }
  };
  
  const find_closest_points = function(points, k) {
    const maxHeap = new Heap([], null, ((a, b) => a.distance - b.distance ));

    result = [];
    for(let i = 0; i < k; i++){
        maxHeap.push({point: points[i], distance: distance(points[i], new Point(0, 0))});
    }

    for(let i = k ; i < points.length; i++){
        const current = maxHeap.peek();
        if(distance(points[i], new Point(0, 0)) < current.distance) {
            maxHeap.pop();
            maxHeap.push({point: points[i], distance: distance(points[i], new Point(0, 0))});
        }
    }

    return maxHeap.toArray().map(a => a.point);
  };
  
  const distance = function(a, b) {
    const distance_a = Math.sqrt(a.x * a.x + a.y * a.y);
    const distance_b = Math.sqrt(b.x * b.x + b.y * b.y);
    return distance_a - distance_b;
  }
  
  points = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2)
  result = "Here are the k points closest the origin: ";
  for (i=0; i < points.length; i++)
    result += points[i].get_point();
  console.log(result);
  