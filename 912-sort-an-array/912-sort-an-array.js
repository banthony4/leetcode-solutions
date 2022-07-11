/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length <= 1) return nums
    
    const mid = Math.floor(nums.length/2)
    const left = sortArray(nums.slice(0,mid))
    const right = sortArray(nums.slice(mid, nums.length))
    return merge(left, right)
};

const merge = (left, right) => {
    let result = [];
    while(left.length && right.length){
        left[0] < right[0] ? result.push(left.shift()) : result.push(right.shift())
    }
    return result.concat(left,right)
}