const find_order = function(words) {
    const adjacencyList = {};
    const inDegree = {};
    for(let i = 1; i < words.length; i++){
        const firstWord = words[i - 1];
        const secondWord = words[i];
        const [parent = undefined, child = undefined] = [] = findFirstUncommonLetter(firstWord, secondWord);
        if(parent && child){
            if(!adjacencyList[parent]){
                adjacencyList[parent] = [];
            }

            if(!inDegree[parent]){
                inDegree[parent] = 0;
            }
            if(!adjacencyList[parent].includes(child)){
                adjacencyList[parent].push(child);
                if(!inDegree[child]) {
                    inDegree[child] = 1;
                } else {
                    inDegree[child] = inDegree[child] + 1;
                }
            }
        }
    }

    const sources = []; // this is a q
    for (let [key, value] of Object.entries(inDegree)) {
        if(value === 0){
            sources.push(key);
        }
    }
  
    const sortedOrder = [];
    // d. For each source, add it to the sortedOrder and subtract one from all of its children's in-degrees(Removing the edge)
    // if a child's in-degree becomes zero, add it to the sources queue
    while (sources.length > 0) {
      const vertex = sources.shift(); // FIFO
      sortedOrder.push(vertex);
      adjacencyList[vertex]?.forEach((child) => { // get the node's children to decrement their in-degrees
        inDegree[child] -= 1;
        if (inDegree[child] === 0) {
          sources.push(child);
        }
      });
    }
  
    return sortedOrder.join('');
  };
  
  const findFirstUncommonLetter = (parent, child) => {
      for(let i = 0 ; i < Math.min(parent.length, child.length); i++) {
          if(parent[i] !== child[i]){
              return [parent[i], child[i]];
          }
      }
      return [];
  }
  
  console.log(`Character order: ${find_order(["ba", "bc", "ac", "cab"])}`)
  console.log(`Character order: ${find_order(["cab", "aaa", "aab"])}`)
  console.log(`Character order: ${find_order(["ywx", "wz", "xww", "xz", "zyy", "zwz"])}`)
  