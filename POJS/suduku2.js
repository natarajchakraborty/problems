function sudoku2(grid) {
    const subGridHashMap = [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]];
    for(let i = 0 ; i < 9 ; i ++) {
        for(let j = 0; j < 9; j++) {
            // console.log(i, j, grid[i][j]);
            if(grid[i][j] !== '.') {
                // console.log(Math.floor(i/3), Math.floor(j/3));
                if(subGridHashMap[Math.floor(i/3)][Math.floor(j/3)] && subGridHashMap[Math.floor(i/3)][Math.floor(j/3)][grid[i][j]]){
                    return false;
                } else {
                    subGridHashMap[Math.floor(i/3)][Math.floor(j/3)] = { ...subGridHashMap[Math.floor(i/3)][Math.floor(j/3)],  [grid[i][j]]: 1};
                }
            }
        }
    }
    
    console.log(subGridHashMap);
    const colHashMap = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const rowHashMap = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    for(let i = 0 ; i < 9; i ++) {
        for(let j = 0 ; j < 9; j++) {

                if(grid[i][j] !== '.') {
                    if(Object.keys(colHashMap[j]).find(x => x === grid[i][j])) {
                        return false;
                    } else {
                        colHashMap[j] = {...colHashMap[j], [grid[i][j]]: 1};
                    }
                
                    if(Object.keys(rowHashMap[i]).find(x => x === grid[i][j])) {
                        return false;
                    } else {
                        rowHashMap[i] = {...rowHashMap[i], [grid[i][j]]: 1};
                    }
                }
        }
    }
    // check left & right diagonal
    
    return true;
}


console.log(sudoku2([
[".",".",".","1","4",".",".","2","."], 
[".",".","6",".",".",".",".",".","."], 
[".",".",".",".",".",".",".",".","."], 
[".",".","1",".",".",".",".",".","."], 
[".","6","7",".",".",".",".",".","9"], 
[".",".",".",".",".",".","8","1","."], 
[".","3",".",".",".",".",".",".","6"], 
[".",".",".",".",".","7",".",".","."], 
[".",".",".","5",".",".",".","7","."]]));