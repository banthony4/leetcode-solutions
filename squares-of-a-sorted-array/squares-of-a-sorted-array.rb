# @param {Integer[]} nums
# @return {Integer[]}
def sorted_squares(nums)
    ans = [0]*nums.length
    
    left, right, i = 0, nums.length-1, nums.length-1
    
    while left <= right
       if nums[left]**2 > nums[right]**2
           ans[i] = nums[left]**2
           left += 1
       else
           ans[i] = nums[right]**2
           right -= 1
       end
        i -= 1
    end
    ans
end