/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let comps = new Map();
    
    for(let i = 0; i < nums.length; i++){
        let compliment = target - nums[i];
        if(comps.has(compliment)){
            return [comps.get(compliment), i]
        } else {
            comps.set(nums[i], i)
        }
    }
    
    return null;
};