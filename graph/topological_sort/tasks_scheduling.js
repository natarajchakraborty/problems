const is_scheduling_possible = function(tasks, prerequisites) {
    return topological_sort(tasks, prerequisites);
  };
  
  function topological_sort(vertices, edges) {
    const sortedOrder = [];
    if (vertices <= 0) {
      return sortedOrder;
    }
  
    // a. Initialize the graph
    // b. Build the graph
    const graph = createAdjancyList(vertices, edges);
    const inDegree = createInDegreeList(vertices, edges);
  
    // c. Find all sources i.e., all vertices with 0 in-degrees
    const sources = []; // this is a q
    for (i = 0; i < inDegree.length; i++) {
      if (inDegree[i] === 0) {
        sources.push(i);
      }
    }
  
    // d. For each source, add it to the sortedOrder and subtract one from all of its children's in-degrees(Removing the edge)
    // if a child's in-degree becomes zero, add it to the sources queue
    while (sources.length > 0) {
      const vertex = sources.shift(); // FIFO
      sortedOrder.push(vertex);
      graph[vertex].forEach((child) => { // get the node's children to decrement their in-degrees
        inDegree[child] -= 1;
        if (inDegree[child] === 0) {
          sources.push(child);
        }
      });
    }
  
    // topological sort is not possible as the graph has a cycle
    if (sortedOrder.length !== vertices) { // can be used to detect cycles in DG
      return false;
    }
  
    return true;
  }
  
  const createAdjancyList = (vertices, edges) => {
    // a. Initialize the graph
    const graph = Array(vertices).fill(0).map(() => Array()); // adjacency list graph
    edges.forEach((edge) => {
      let parent = edge[0],
        child = edge[1];
      graph[parent].push(child); // put the child into it's parent's list
    });
    return graph;
  }
  
  const createInDegreeList = (vertices, edges) => {
    // a. Initialize the graph
    const inDegree = Array(vertices).fill(0); // count of incoming edges
    edges.forEach((edge) => {
      let child = edge[1];
        inDegree[child]++; // increment child's inDegree
    });
    return inDegree;
  }
  
  console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2]])}`);
  console.log(`Is scheduling possible: ${is_scheduling_possible(3, [[0, 1], [1, 2], [2, 0]])}`);
  console.log(`Is scheduling possible: ${is_scheduling_possible(6, [[0, 4], [1, 4], [3, 2], [1, 3]])}`);
  // Exactly similar problem: 
  // Given the number of courses and a list of prerequisite pairs, find if it is possible for a student to take all the courses