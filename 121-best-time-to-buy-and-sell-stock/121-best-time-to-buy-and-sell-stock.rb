# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    profit, buy = 0, prices[0]
    
    prices.each do |sell|
        if buy < sell
            profit = [profit, sell-buy].max
        else
            buy = sell
        end
    end
    profit
end