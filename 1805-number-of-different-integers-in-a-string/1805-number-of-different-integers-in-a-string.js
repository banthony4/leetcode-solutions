/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    const numsArr = word.split(/[^0-9]+/);
    const numsSet = new Set();
    
    for(let num of numsArr){
        if(num.length>0){
            let i = 0;
            while(i<num.length && num[i] === '0'){
                i++
            }
            numsSet.add(num.slice(i));

        }
    }
    
    return numsSet.size;
};