/*
 You are give a set of n numbers, check if there is a subset of them with sum equal to the S, given n <= 20, you cannot take an element more than once.
Explaination:

"If we list down all the binary numbers from 0 to (2^n)-1 , we get ALL the possible combinations of selecting n items"

Lets verify for n=3

000: None of the values in the set chosen

001: 1st chosen, 2nd and 3rd items left out

010: 2nd chosen, 1st and 3rd items left out

011: 1st and 2rd item chosen, 3rd one left out.

...

111: All 3 items chosen

Algorithm:

Run a loop for 'i' for all numbers from 0 to 2^(n-1).
When inside this loop, run a loop for 'j' from 0 to n-1 inclusive
Inside this loop, check if the 'j'th bit is SET(equal to 1) for the number 'i'.
If it is, then we include this element in our 'i'th subset
Done.


Another:

Let us consider arr[] = {3, 1, 5}, we need 
to whether a subset sum of x exists or not, 
where 0 ≤ x ≤ Σarri.

We create a bitset bit[10] and reset all the  
bits to 0, i.e., we make it 0000000000.

Set the 0th bit, because a subset sum of 0 
exists in every array.
Now, the bit array is 0000000001

Apply the above technique for all the elements
of the array :
Current bitset = 0000000001

After doing "bit = bit | (bit << 3)", 
bitset becomes    0000001001


After doing "bit | (bit << 1)", 
bitset becomes    0000011011


After doing "bit | (bit << 5)", 
bitset becomes    1101111011    
Finally, we have the bit array as 1101111011, so, if bit[x] is 1 then a subset sum of x exists otherwise not.
We can clearly observe that a subset sum of all the numbers from 0 to 9 except 2 and 7 exists in the array.

*/
// https://www.youtube.com/watch?v=bgXpltW2yAQ
// https://www.youtube.com/watch?v=1tYoQx2LZDE

const subSetSum = (a, n, S) => {
    for(let mask = 0; mask < (1 << n); mask++){
        let sum_of_this_subset = 0;
        for(let j = 0; j < n ; j ++) {
            if(mask & (1 << j)) {
                sum_of_this_subset += a[j];
            }
        }
        if(sum_of_this_subset === S){
            console.log('Yes');
            return;
        }
    }
}


console.log(subSetSum([7, 2, 4, 1, 9, 10], 6, 16));