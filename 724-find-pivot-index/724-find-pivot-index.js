/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let a = nums.slice(0,i).reduce((a,b) => a + b,0)
        let b = nums.slice(i + 1).reduce((a,b) => a + b,0)
        
        if(a === b){
            return i
        }
    }
    return -1
};