# @param {Integer[]} nums
# @param {Integer} k
# @return {Void} Do not return anything, modify nums in-place instead.
def rotate(nums, k)
    k %= nums.length
    k.times {|i| nums.unshift(nums.pop)}
end