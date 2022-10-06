# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    left, right = 0, nums.length-1
    
    while left <= right
        mid = (left+right) / 2
        if nums[mid] == target
           return mid
        elsif nums[mid] > target
            right = mid - 1
        else
            left = mid + 1
        end
    end
    -1
end