/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = {}
    
    const helper = (x) => {
        if(memo[x]) return memo[x];
        if(x < 3) return x;
        return memo[x] = helper(x-1) + helper(x-2)
    }
    return helper(n)
};