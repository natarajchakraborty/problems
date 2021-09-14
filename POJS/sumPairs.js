//  function sumPairs(ints, s) {  
//     const map = new Map();
//     ints.forEach((num, i) => {
//       map.set(num, i);
//     });
    
//     let start = Infinity;
//     let end = Infinity;
//     for(let i = 0; i < ints.length; i++){
//       if(map.has(s - ints[i] )){
//         const endIdx = map.get(s - ints[i])
//         if(endIdx < end && endIdx > i){
//             start = i;
//             end = endIdx;
//         }
//       }
//     }
//     if(start < Infinity && end < Infinity){
//         return [ints[start], ints[end]];
//     }
//   }
 function sumPairs(ints, s) {  
    const seen = new Set();
    for (const n of ints) {
      if (seen.has(s - n)){
        return [s - n, n];
      } 
      seen.add(n);
    }
  }

  console.log(sumPairs([10,5,2,3,7,5], 10));

  //console.log(sumPairs([1,4,8,7,3,15], 8))