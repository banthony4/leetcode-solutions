/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCount = 0;
    
    function dfs(r, c) {
        if(grid[r] === undefined || grid[r][c] === undefined || grid[r][c] === '0') return;
        grid[r][c] = '0';
        dfs(r+1, c);
        dfs(r-1, c);
        dfs(r, c+1);
        dfs(r, c-1);
    }
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === '1') {
                islandCount++;
                dfs(r, c);
            }
        }
    }
    
    return islandCount;
};
