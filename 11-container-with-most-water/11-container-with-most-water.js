/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0, end = height.length - 1, max = 0;
    
    while(start < end){
        let width = end - start
        max = Math.max(max, Math.min(height[start], height[end])*width)
        if(height[start] <= height[end]){
            start++
        } else{
            end--
        }
    }
    return max;
};