/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = 0;
    for(let num of nums){
        sum += num;
    }
    
    let realSum = 0;
    for(let i = 1; i <= nums.length; i++){
        realSum += i;
    }
    return realSum-sum;
};