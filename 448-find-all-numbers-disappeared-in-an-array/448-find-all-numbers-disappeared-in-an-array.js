/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    nums.forEach(number => {
        const indexBasedOnThisValue = Math.abs(number) - 1
        if (nums[indexBasedOnThisValue] > 0) {
            nums[indexBasedOnThisValue] = nums[indexBasedOnThisValue] * -1
        }
    })
    const result = []
    for (let i=0; i<nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1)
        }
    }
    return result
};