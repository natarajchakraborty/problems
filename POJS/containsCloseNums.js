function containsCloseNums(nums, k) {
    const numMap = {};
    for(let i = 0; i < nums.length; i++){
        const num = nums[i];
        if(!numMap[num]){
            numMap[num] = {count: 1, idx: i };
        } else {
            numMap[num].count++;
            if(Math.abs(numMap[num].idx - i) <= k ){
                return true;
            } else {
                numMap[num].idx = i;
            }
        }
    }
    return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));