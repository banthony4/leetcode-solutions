/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0, right = x;
    
    while(left <= right){
        let mid = Math.floor( (left+right)/2 )
        if(mid**2 === x){
            return mid
        } else if(mid**2 > x){
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    
    return right;
};