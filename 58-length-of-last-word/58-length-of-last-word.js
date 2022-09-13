/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.split(' ')
    let lastWord = words.length-1
    
    while(words[lastWord].length === 0){
        lastWord--
    }
    
    return words[lastWord].length
};