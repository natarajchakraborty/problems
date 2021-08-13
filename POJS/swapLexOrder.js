function swapLexOrder(str, pairs) {
    const visited = {};
    const graphMap = {};
    const adjuncyList = {};
    pairs.forEach(element => {
        const from = element[0];
        const to = element[1];
        if(!adjuncyList[from]){
            adjuncyList[from] = [];
        }
        adjuncyList[from].push(to);
        if(!adjuncyList[to]){
            adjuncyList[to] = [];
        }
        adjuncyList[to].push(from);
    });

    for(let i = 0; i < pairs.length; i++) {
        if(!visited[pairs[i][0]]){
            let connectedComponent = [{ idx: pairs[i][0] - 1, char: str[pairs[i][0] - 1] }, ...dfs(str, pairs[i][0], adjuncyList, visited)];
            // merge with current list
            if(connectedComponent && connectedComponent.length) {
                graphMap[pairs[i][0] - 1] = connectedComponent;
            }
        }
    }

    // make largest string
    const strArr = str.split('');
    for (const [key, value] of Object.entries(graphMap)) {
        const startIdx = key;
        const charsToInsertSorted = value.map(v => v.char).sort((a, b) => b.localeCompare(a));
        const indexToInsertSorted = value.map(v => v.idx).sort((a, b) => a - b);
        for(let i = 0 ; i < charsToInsertSorted.length; i++){
            strArr[indexToInsertSorted[i]] = charsToInsertSorted[i];
        }
    }

    return strArr.join('');
}

const dfs = (str, start, adjuncyList, visited) => {
    if(!visited[start]) {
        visited[start] = true;
    }
    const tos = adjuncyList[start];
    // loop for each child
    const traversed = [];
    for(let i = 0; i < tos.length; i++){
        const to = tos[i];
        if(to && !visited[to]){
            traversed.push({idx: to - 1, char: str[to - 1]});
            traversed.push(...dfs(str, to, adjuncyList, visited));
        }
    }
    return traversed;
}


console.log(swapLexOrder("fixmfbhyutghwbyezkveyameoamqoi", [[8,5], 
[10,8], 
[4,18], 
[20,12], 
[5,2], 
[17,2], 
[13,25], 
[29,12], 
[22,2], 
[17,11]]));


// 7, 4, 9, 1, 16, 10, 21

// 1, 4, 7, 9, 10, 16, 21