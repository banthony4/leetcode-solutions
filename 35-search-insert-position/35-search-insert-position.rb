# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    lo, hi = 0, nums.length-1
    
    while lo <= hi
        mid = lo + (hi-lo) / 2
        
        return mid if nums[mid] == target
        
        if nums[mid] < target
            lo = mid+1
        else
            hi = mid-1
        end
    end
    lo
end