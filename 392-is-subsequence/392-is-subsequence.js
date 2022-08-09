/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let j = 0;
    
    if(s === t) return true;
    
    for(let i = 0; i < t.length; i++){
        if(s[j] === t[i]) j++;
        
        if(j === s.length) return true
    }
    return false;
};