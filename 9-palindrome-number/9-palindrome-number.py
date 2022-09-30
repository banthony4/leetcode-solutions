class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        orig_num = x
        rev_num = 0
        
        while x > 0:
            rev_num = (rev_num*10) + (x%10)
            x = x // 10
        return orig_num == rev_num