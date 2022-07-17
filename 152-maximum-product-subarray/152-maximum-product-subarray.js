/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if(nums.length === 1) return nums[0];
    let min = 0, max = 0, res = 0;
    
    for(let num of nums){
        let curMax = Math.max(num, num*max, num*min);
        let curMin = Math.min(num, num*max, num*min);
        
        max = curMax;
        min = curMin;
        
        res = Math.max(max, res)
    }
    return res;
};