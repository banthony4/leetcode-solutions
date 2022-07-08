/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let start = 0, end = nums.length-1;
    while(start < end){
        let mid = Math.floor((start+end)/2);
        if(nums[mid] >= target){
            end = mid
        } else {
            start = mid + 1
        }
    }
        
    if(nums[start] !== target){
      return [-1,-1]  
    } 
    end = nums.length - 1;
    let low = start
    while(low <= end) {
        let mid = Math.floor((low+end)/2);
        if(nums[mid] > target){
            end = mid - 1
        } else {
            low = mid + 1
        }
    }
    return [start, end];
};