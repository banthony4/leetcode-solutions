/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    mx = Math.max(...nums)
    for(let i=0; i < nums.length; i++){
        if(nums[i] != mx && (nums[i]*2) > mx){
            return -1
        }
    }
    return nums.indexOf(mx)
};