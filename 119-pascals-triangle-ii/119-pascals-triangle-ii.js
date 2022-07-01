/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let pascal = []
    for(let i = 0; i <= rowIndex; i++){
        pascal[i] = []
        for(let j = 0; j <= i; j++){
            if(j === 0 || j === i){
                pascal[i][j] = 1
            } else{
                pascal[i][j] = pascal[i-1][j-1] + pascal[i-1][j]
            }
        }
    }
    return pascal[rowIndex]
};