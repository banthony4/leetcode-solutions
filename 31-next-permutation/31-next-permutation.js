/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let i = nums.length-2
    
    while(i >= 0 && nums[i+1] <= nums[i]){
        i--
    }
    if(i>=0){
        let j = nums.length-1;
        while(nums[j] <= nums[i]){
            j--
        }
        swap(nums, i, j)
    }
    reverse(nums, i+1)
};

const reverse = (nums, start) => {
    let end = nums.length - 1;
    while(start < end){
        swap(nums, start, end)
        start++
        end--
    }
}

const swap = (nums, i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]]
}