/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let rows = mat.length
    let cols = mat[0].length
    let result = new Array(rows+cols -1).fill(null).map(() => [])
    for(let i = 0; i < rows; i++){
        for(let j = 0; j < cols; j++){
         if((i + j) % 2 === 0) {
             result[i + j].unshift(mat[i][j]);
         } else {
             result[i + j].push(mat[i][j]);   
         }
        }
    }
    return result.flat();
};