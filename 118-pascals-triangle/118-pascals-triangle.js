/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pascal = []
    for(let i = 0; i < numRows; i++){
        pascal[i] = []
        for(let j = 0; j < i + 1; j++){
            if(j === 0 || j === i){
                pascal[i][j] = 1
            } else {
                pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j] 
            }
        }
    }
    return pascal
};