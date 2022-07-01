/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count = 0;
    let expected = [...heights].sort((a,b) => a-b)
    for(let i = 0; i < heights.length; i++){
        if(expected[i] !== heights[i]){
            count++
        }
    }
    return count
};