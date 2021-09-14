const smallestNonconstructibleValue = (A) => {
    A.sort((a, b) => a-b);
    let maxConstructibleValue = 0;
    for (let i = 0 ; i < A.length; i++) {
        if (A[i] > maxConstructibleValue + 1) {
            break ;
        }
        maxConstructibleValue += A[i];
    }
    return maxConstructibleValue + 1;
}

console.log(smallestNonconstructibleValue([12, 2,1,15, 2,4]));
