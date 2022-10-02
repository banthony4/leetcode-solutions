class Solution(object):
    def findMaxConsecutiveOnes(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        count = 0
        max_count = 0
        
        for num in nums:
            if num == 1:
                count += 1
                max_count =  max(count, max_count)
            else:
                count = 0
        return max_count