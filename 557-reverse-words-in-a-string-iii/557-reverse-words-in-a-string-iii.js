/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let sArr = s.split(' ')
    for(let i = 0; i < sArr.length; i++){
        let word = sArr[i].split('')
        let a = 0
        let b = word.length - 1
        while(a < b){
            [word[a], word[b]] = [word[b], word[a]]
            a++
            b--
        }
        sArr[i] = word.join('')
    }
    return sArr.join(' ')
};