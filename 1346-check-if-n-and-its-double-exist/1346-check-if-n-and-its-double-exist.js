/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    const set = new Set()
    for(let val of arr){
        if(set.has(2*val) || set.has(val/2)){
            return true
        }
        set.add(val)
    }
    return false
};