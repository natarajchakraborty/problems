// https://stackoverflow.com/a/43642395
/*
Don't gather all the combinations, just the sums.
Your set of sums starts with [0]. Cycle through the coins, one at a time. For each coin, iterate through its quantity, 
adding that multiple to each item of the set. Set-add each of these sums to the set. For example, let's take that original case:
coins = [1, 2, 3], quant = [1, 2, 2]. Walking through this ...

doesnot work....

As need count of ditinct sums, hence unqiue sums needs to be produced and stored and total count of the generate sums if the answer
*/

function possibleSums(coins, quantity) {
    // calculate running max sums
    var max = coins.reduce(function(s, c, i) {
      s += c * quantity[i];
      return s;
    }, 0);
  
    var sums = [0];
    var seen = {};
  
    for (var j = 0; j < coins.length; j++) {
      var coin = coins[j];
      var n = sums.length;
      for (var i = 0; i < n; i++) {
        var s = sums[i];
        for (var k = 0; k < quantity[j]; k++) {
          s += coin;
          if (max < s) break;
          if (!seen[s]) {
            seen[s] = true;
            sums.push(s);
          }
        }
      }
    }
    return Object.keys(seen).length;
  }

console.log(possibleSums([10, 50, 100], [1, 2, 1]));