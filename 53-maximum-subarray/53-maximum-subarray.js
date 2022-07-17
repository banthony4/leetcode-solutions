/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if(nums.length === 0) return 0
    
    let curr = 0, max = nums[0];
    
    for(let i = 0; i < nums.length; i++){
        let num = nums[i]
        curr = Math.max(num, curr + num)
        max = Math.max(max, curr)
    }
    return max
};