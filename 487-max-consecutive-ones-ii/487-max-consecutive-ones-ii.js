/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let left = 0, right = 0, K = 1;

	while(right < nums.length) {
		if(nums[right] === 0) K--;
		if(K < 0) {
			if(nums[left] === 0) K++;
			left++;
		}
		right++;
	}
	return right-left;
};