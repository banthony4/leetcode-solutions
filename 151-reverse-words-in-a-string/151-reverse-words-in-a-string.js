/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ans = []
    let split = s.trim().split(' ')
    for(let i = 0; i < split.length; i++){
        if(split[i]){
            ans.unshift(split[i])
        }
    }
    return ans.join(' ')
};