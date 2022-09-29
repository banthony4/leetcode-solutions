class Solution(object):
    def twoSum(self, nums, target):
        map = {}
        
        for i,num in enumerate(nums):
            if target-num in map:
                return map[target-num],i
            map[num] = i
                
        