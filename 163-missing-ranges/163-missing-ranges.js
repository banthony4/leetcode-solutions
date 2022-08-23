/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function(nums, lower, upper) {
    
  let ranges = [];
  nums.unshift(lower);
  nums.push(upper);

    for (let i = 0; i < nums.length-1; i++) {
        let l = nums[i]+1;
        let r = nums[i+1]-1;
        
        if (i === 0) l--;
        if (i+1 === nums.length-1) r++;
        if (l > r) continue;

        if (l == r) ranges.push(`${l}`);

        else ranges.push(`${l}->${r}`);
    }
    return ranges;
};