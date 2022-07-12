/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let col = new Set();
    let posDia = new Set();
    let negDia = new Set();
    let count = 0;
    
    const isValid = (r,c) => !(col.has(c) || posDia.has(r+c) || negDia.has(r-c));
    
    const addQueen = (r,c) => {
        col.add(c);
        posDia.add(r+c);
        negDia.add(r-c);
    }
    
    const removeQueen = (r,c) => {
        col.delete(c);
        posDia.delete(r+c);
        negDia.delete(r-c);
    }
    
    function countQueens(row){
        if(row === n) count++;
        
        for(let col = 0; col < n; col++){
            if(isValid(row, col)){
                addQueen(row,col);
                count = countQueens(row+1, count)
                removeQueen(row,col)
            }
        }
        return count;
    }
    return countQueens(0)
};