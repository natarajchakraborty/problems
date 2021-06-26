const search_triplets = function (arr) {
  const pair_all_with_targetsum = function (arr, target_sum) {
    var index = arr.length - 1;
    const targetPairs = [];
    for (var i = 0; i < arr.length && index > -1; ) {
      if (arr[i] + arr[index] === target_sum ){
          const toPush = [arr[i], arr[index]].sort((a,b) => a-b);
          if(!targetPairs.includes(toPush.join(","))  && i !== index){
            targetPairs.push(toPush.join(","));
          }
         index -= 1;
         i++;
      } else if (arr[i] + arr[index] > target_sum) {
        index -= 1;
      } else if (arr[i] + arr[index] < target_sum) {
        i++;
      }
    }
    return targetPairs;
  };
  const foundTripplets = [];
  for(let key = 0 ; key < arr.length; key++) {
      const targetSum = 0 - arr[key];
      const arrWithoutKey = arr.filter(r => r !== arr[key]);
      const targetSums = pair_all_with_targetsum(arrWithoutKey.sort((a, b) => a - b), targetSum);
      if(targetSums.length) {
          targetSums.forEach((sum) => {
              const numbers = sum.split(',');
              const triplet = [+numbers[0], +numbers[1], arr[key]].sort((a,b) => a-b);
              if(!foundTripplets.includes(triplet.join(','))){
                foundTripplets.push(triplet.join(','))
              }
          })
      }
  }

  return foundTripplets.map(str => str.split(',').map(s => +s));
};


console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
console.log(search_triplets([-5, 2, -1, -2, 3]));