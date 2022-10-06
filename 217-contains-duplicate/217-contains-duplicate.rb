# @param {Integer[]} nums
# @return {Boolean}
def contains_duplicate(nums)
    counts = {}
    
    nums.each do |num|
        return true if counts[num]
        
        counts[num] = 1
    end
    return false
end