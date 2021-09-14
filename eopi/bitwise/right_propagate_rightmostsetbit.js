// e.g., turns(01010000)2 to (01011111)2

const propagateRightMost = (x) => {
    console.log(x.toString(2));
    let rightMost = x & ~(x -1) ;
    while(rightMost){
        rightMost = rightMost >> 1;
        x = x | rightMost;
    }
    return x;
}


console.log(propagateRightMost(0b01010000).toString(2));