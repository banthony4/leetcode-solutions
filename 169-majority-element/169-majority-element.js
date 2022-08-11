/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = {}
    
    for(let num of nums){
        if(!map[num]){
            map[num] = 1;
        } else{
            map[num]++
        }
    }
    
    for(let num in map){
        if(map[num] > nums.length/2) return num
    }
};