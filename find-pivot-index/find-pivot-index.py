class Solution(object):
    def pivotIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        total = 0
        for num in nums:
            total += num
            
        left, right = 0, total
        
        for i in range(len(nums)):
            right -= nums[i]
            if left == right:
                return i
            left += nums[i]
        
        return -1