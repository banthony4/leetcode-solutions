/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let memo = {};
    
    const helper = (x) => {
        if(x < 2) return x;
        if(memo[x]) return memo[x]
        return memo[x] = helper(x-1) + helper(x-2)
    }
    return helper(n)
};