/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProf = 0, buy = prices[0];
    
    for(let sell of prices) {
        if(buy < sell) {
            maxProf = Math.max(maxProf, sell - buy);
        }else {
            buy = sell
        }
    }
    return maxProf;
};