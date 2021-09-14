// returns 13 for 77 mod 64. Note 64 = 2 ^ 6
// 77/ 2 = 38.5 /2  = 19.25 /2 = 9.6
// "When you take something mod to power of 2 you just take its lower order bits"

moduloByPowerOfTwo = (x, y) => {
    console.log(x.toString(2));
    console.log(y.toString(2));
    console.log((y - 1).toString(2));
    const mod = (x & (y - 1));
    console.log(mod.toString(2))
    return (x & (y - 1));
}

console.log(moduloByPowerOfTwo(77, 64));

