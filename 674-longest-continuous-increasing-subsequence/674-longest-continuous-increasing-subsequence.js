/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let max = 0, count = 1;
    
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < nums[i+1]){
            count++;
        }else{
            count = 1
        }
        max = Math.max(max, count)
    }
    return max;
};