class Solution(object):
    def dominantIndex(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max1 = 0
        max2 = 0
        max1_idx = 0

        for i, num in enumerate(nums):
            if num >= max1:
                max2 = max1
                max1 = num
                max1_idx = i
            elif num > max2:
                max2 = num             

        return max1_idx if max1 >= max2 * 2 else -1