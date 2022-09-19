/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    let ans = ''
    for(let char of s){
        ans += char.toLowerCase()
    }
    
    return ans;
};