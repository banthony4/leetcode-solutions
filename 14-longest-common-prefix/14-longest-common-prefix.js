/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = ''
    const first = strs[0]
    for(let i in first){
        if(strs.every(el => el[i] === first[i])){
            ans += first[i]
        } else {
            break;
        }
    }
    return ans
};