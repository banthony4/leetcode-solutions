/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let ans = []
    let left = 0;
    let right = nums.length - 1
    for(let i = nums.length - 1; i >= 0; i--){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            ans[i] = nums[left]**2
            left++
        } else {
            ans[i] = nums[right]**2
            right--
        }
    }
    return ans
};