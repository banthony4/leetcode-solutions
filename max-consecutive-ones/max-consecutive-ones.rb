# @param {Integer[]} nums
# @return {Integer}
def find_max_consecutive_ones(nums)
    max, count = 0,0
    
    nums.each do |num|
        if num == 1
            count += 1
            max = count if count > max
        else
            count = 0
        end
    end
    max
end