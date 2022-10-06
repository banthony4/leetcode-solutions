# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
    curr, max = 0, nums[0]
    
    nums.each do |num|
        curr = [curr+num,num].max
        max = [max, curr].max
    end
    max
end