/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target, row=0, col=matrix[0].length-1) {
    if(!matrix || !matrix.length) return false;
    if(row === matrix.length || col<0) return false;
    
    const val = matrix[row][col];
    if(val === target) return true;
    
    if(target < val){
      return searchMatrix(matrix, target, row, col-1)  
    } else{
        return searchMatrix(matrix, target, row+1, col)
    }
    
};