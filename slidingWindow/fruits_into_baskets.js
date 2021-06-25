
const numberOfBaskets = 2;
const fruits_into_baskets = function(fruits) {
    let fruitBaskets = {};
    let window_s = 0;
    let maximum = {};

    for(window_e = 0; window_e < fruits.length; window_e++) {
      if(fruitBaskets[fruits[window_e]]) {
        fruitBaskets[fruits[window_e]] += 1;
      } else {
        fruitBaskets[fruits[window_e]] = 1;
      }

      if(Object.keys(fruitBaskets).length > numberOfBaskets) {
          // slide
          if(fruitBaskets[fruits[window_s]] > 1) {
            fruitBaskets[fruits[window_s]] -= 1;
          } else {
            delete fruitBaskets[fruits[window_s]];
          }
          window_s++;
      } 

      if(Object.keys(fruitBaskets).length === numberOfBaskets) {
          // check for max
          Object.keys(fruitBaskets).forEach(key => {
            if(maximum[key] && maximum[key]  < fruitBaskets[key] ) {
                maximum[key] = fruitBaskets[key];
              } else if(maximum[key] === undefined) {
                maximum[key] = fruitBaskets[key];
              }
          });
          Object.keys(maximum).forEach(key => {
              if(fruitBaskets[key] === undefined){
                  delete maximum[key];
              }
          });

      }
    }
    return Object.keys(maximum).reduce((a, b) =>  a + maximum[b], 0)
  };

  console.log(fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])); // 3,
  console.log(fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C'])); // 5

  /// Notes
  /// this problem can be solved by console.log(longest_substring_with_k_distinct("ABCAC", 2));
  /// also a similar problem, and same solution: Longest Substring with at most 2 distinct characters