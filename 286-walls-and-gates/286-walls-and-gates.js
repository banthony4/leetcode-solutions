/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
var wallsAndGates = function(rooms) {
    let queue= [];
    const m = rooms.length
    const GATE = 0; 
    const EMPTY = 2147483647;
    const DIRS = [ [0, 1], [0, -1], [-1, 0], [1, 0] ];
    
    const inbound = (arr, i, j) => {
        return i >= 0 && j >= 0 && i < arr.length && j < arr[0].length;
    }
    
    if(m === 0) return;
    
    for(let i = 0; i < m; i++){
        for(let j = 0; j < rooms[i].length; j++){
            if (rooms[i][j] === GATE){
                queue.push([i,j])
            }
        }
    }
    
    while(queue.length != 0){
        const [row, col] = queue.shift()
        
        for(let [dx, dy] of DIRS){
            let r = row + dx, c = col + dy;
            if(!inbound(rooms, r, c) || rooms[r][c] != EMPTY) continue;
            rooms[r][c] = rooms[row][col] + 1;
            queue.push([r, c]);
        }
    }
};
