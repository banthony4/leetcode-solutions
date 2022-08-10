/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let hi = nums.length-1, lo = 0;
    
    while(lo <= hi){
        let mid = Math.floor((hi+lo)/2)
        if(nums[mid] === target) return mid;
        
        if(nums[mid] > target){
            hi = mid - 1
        } else {
            lo = mid + 1
        }
    }
    return lo
};