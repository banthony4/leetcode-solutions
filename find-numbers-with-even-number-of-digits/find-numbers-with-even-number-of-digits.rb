# @param {Integer[]} nums
# @return {Integer}
def find_numbers(nums)
    count = 0
    
    nums.each do |num|
        if num.to_s.length.even? then count+=1 end
    end
    count
end