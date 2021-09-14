// evaluates to true for x = 1, 2,4,8,..., false for all other values
// power of two means it only has one set bit

const isPowerOf2 = (x) => {
    const lowestSetBit = x & ~(x-1);
    return x ^ lowestSetBit ? false : true; 
}

console.log(isPowerOf2(2));

console.log(isPowerOf2(4));
console.log(isPowerOf2(8));
console.log(isPowerOf2(16));

console.log('---------');
console.log(isPowerOf2(6));
console.log(isPowerOf2(7));
console.log(isPowerOf2(9));