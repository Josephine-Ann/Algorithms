function maximumToys(prices, k) {
    prices.sort((a, b) => a - b);
    let quantity = 0;
    let total = 0;
    prices.forEach(price => {
        if ((total + price) < k) {
            total += price
            quantity++
        }
    });
    return quantity
}

// explanation

// hackerrank.com/challenges/mark-and-toys/problem