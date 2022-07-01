/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0;
    let j = numbers.length - 1
    while(j > i){
        let sum = numbers[i] + numbers[j]
        if(sum === target){
            return [i+1, j+1]
        } else{
            sum > target ? j-- : i++; 
        }
    }
};