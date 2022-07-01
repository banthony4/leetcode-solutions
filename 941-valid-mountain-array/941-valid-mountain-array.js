/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    if(arr.length < 3) return false
    let i = 1;
    let inc = false;
    let dec = false;
    while(arr[i-1] < arr[i]){
        inc = true
        i++
    }
    if(arr[i-1] === arr[i]) return false
    while(arr[i-1] > arr[i]){
        dec = true
        i++
    }
    return i === arr.length && inc && dec
};