/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let i = 0;
    let j = 0;
    let sum = 0;
    let result = 0;
    while(j < nums.length) {
        sum += nums[j];
        while(sum >= target) {
            let length = j - i +1;
            if(result === 0 || length < result) result = length;
            sum -= nums[i];
            i++
        }
        j++;
    }
    return result;
};