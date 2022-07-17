/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let uniqNums = new Set();
    
    for(let num of nums){
         if(uniqNums.has(num)){
             return true
         } else {
             uniqNums.add(num)
         }
    }
    return false;
};