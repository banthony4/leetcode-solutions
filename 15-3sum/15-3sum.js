/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let res = []
    if(nums.length < 3) return res;
    
    nums.sort((a,b) => a-b);
    
    for(let i = 0; i < nums.length-2; i++){
        let low = i+1, hi=nums.length-1, sum=0;
        
        while(low<hi){
            sum = nums[i] + nums[low] + nums[hi];
            if(sum === 0){
                res.push([nums[i],nums[low],nums[hi]]);
                while(nums[low+1] === nums[low]) low++;
                while(nums[hi-1] === nums[hi]) hi--;
                low++;
                hi--;
            } else if(sum < 0){
                low++
            } else{
                hi--;
            }
        }
        while(nums[i+1] === nums[i]) i++;
    }
    return res;
};