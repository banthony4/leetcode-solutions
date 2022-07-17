/**
 * @param {number[]} nums
 * @return {number[]}
 */
   var productExceptSelf = function(nums) {
        let ans = [];
        let multiplier = 1;
        for(let i=0; i<nums.length; i++) {
            ans[i] = multiplier; // right array
            multiplier *= nums[i];
        }
        multiplier = 1;//resetting
        for(let i=nums.length-1; i>=0; i--) {
            ans[i] *= multiplier; // right array * left array
            multiplier *= nums[i];
        }
        return ans;
    };