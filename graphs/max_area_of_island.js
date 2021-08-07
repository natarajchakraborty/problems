/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    
    let maxArea = 0;
    
    
    for(let i = 0 ; i < row; i++){
        for(let j = 0; j < col; j++){
            if(grid[i][j] === 1) {
                const area = dfs(i, j, grid, row, col);
                if(area > maxArea){
                    maxArea = area;
                }
            }        
        }
    }
    return maxArea;
};

function dfs(i, j, grid, row, col) {
    
    
    if ( i < 0 || j < 0 || grid[i][j] === 0 || j >= col || i >= row){
        return 0;
    }
    
    let area = 1;
    
     // destroy 
    grid[i][j] = 0;
    
    // up
    if(i - 1 >= 0){
        area = area + dfs(i - 1, j, grid,  row, col);
    }
    // down
    if(i + 1 < row ){
        area = area + dfs(i + 1, j, grid,  row, col);
    }
    // left
    if(j - 1 >= 0) {
        area = area + dfs(i, j - 1, grid, row, col);
    }
    // right
    if(j + 1 <  col) {
        area = area + dfs(i, j + 1, grid, row, col);
    }
    
    return area;
}

const grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]];

console.log(maxAreaOfIsland(grid));