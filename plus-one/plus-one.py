class Solution(object):
    def plusOne(self, digits):
        """
        :type digits: List[int]
        :rtype: List[int]
        """
        
        for i in range(len(digits)-1,-1,-1):
            digits[i] += 1
            if digits[i] != 10:
                return digits
            digits[i] = 0
            
        return [1] + digits