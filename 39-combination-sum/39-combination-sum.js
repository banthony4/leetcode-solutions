/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = [];
    
    function combs(arr=[], sum=0, idx=0) {
        if(sum > target) return;
        if(sum === target) result.push(arr);
        
        for(let i = idx; i < candidates.length; i++) {
            combs([...arr, candidates[i]], sum+candidates[i], i);
        }
    }
    combs();
    return result;
};