/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let sum = 0;
    let exps = 0;
    
    const dfs = (sum, idx=0) => {
        if(idx === nums.length && sum === target){
            return exps += 1;
        }
        while(idx < nums.length){
            let plus = sum + nums[idx];
            let minus = sum - nums[idx];
            return dfs(plus, idx+1) + dfs(minus, idx+1)
        }
    }
    dfs(sum)
    return exps;
};