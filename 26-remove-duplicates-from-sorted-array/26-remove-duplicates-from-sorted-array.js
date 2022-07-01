/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let k = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] === nums[k]){
            continue
        } else {
            k++
            nums[k] = nums[i]
        }
    }
    k++
    return k
};