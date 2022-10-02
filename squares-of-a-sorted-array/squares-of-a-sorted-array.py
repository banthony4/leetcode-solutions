class Solution(object):
    def sortedSquares(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        ans = [None] * len(nums)
        left, right = 0, len(nums)-1
        
        for i in range(len(nums)-1, -1, -1):
            if abs(nums[left]) > abs(nums[right]):
                ans[i] = nums[left]**2
                left += 1
            else:
                ans[i] = nums[right]**2
                right -= 1
        return ans
                