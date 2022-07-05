/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let count = 0;
    const WATER = '0';
    const LAND = '1';
    const DIRECTIONS = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];
    
    function bfs(grid, r, c ) {
        let queue = [[r, c]];
        grid[r][c] = WATER;

        while (queue.length) {
            let size = queue.length;
            for (let i = 0; i < size; i++) {
                let [row, col] = queue.pop();

                for (let [x, y] of DIRECTIONS) {
                    let iRow = row + x;
                    let iCol = col + y;

                    if (iRow < 0 || iRow >= grid.length || iCol < 0 || iCol >= grid[0].length || grid[iRow][iCol] !== LAND) {
                        continue;
                    }
                    grid[iRow][iCol] = WATER;
                    queue.unshift([iRow, iCol]);
                }
            }
        }
    }
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === LAND) {
                count++;
                bfs(grid, i, j);
            }
        }
    }
    return count;
    
};