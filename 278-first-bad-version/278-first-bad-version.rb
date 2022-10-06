# The is_bad_version API is already defined for you.
# @param {Integer} version
# @return {boolean} whether the version is bad
# def is_bad_version(version):

# @param {Integer} n
# @return {Integer}
def first_bad_version(n)
    left, right = 0, n
    
    while left < right
        mid = left + (right-left) / 2
        is_bad_version(mid) ? right = mid : left = mid + 1
    end
        left
end