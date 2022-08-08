/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sum = 0;
    for(let num of nums){
        sum += num
    }
    let sumL = 0, sumR = sum;
    
    for(let i = 0; i < nums.length; i++) {
        sumR -= nums[i]
        if(sumL === sumR) return i;
        sumL += nums[i]
    }
    return -1
};