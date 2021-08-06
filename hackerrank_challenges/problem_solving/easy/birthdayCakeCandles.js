function birthdayCakeCandles(candles) {
    var tot = 1
    var max = candles[0]
    for (let i = 0; i < candles.length; i++) {
        if (candles[i] > max) {
            max = candles[i]
            i = 0
            tot = 0
        } else if (candles[i] === max && i !== 0) {
            tot++
        }
    }
    return tot

}

// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Sample Input 0

// 4
// 3 2 1 3
// Sample Output 0

// 2