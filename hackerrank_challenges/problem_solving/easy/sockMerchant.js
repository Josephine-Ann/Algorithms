function sockMerchant(n, ar) {
    var singleSocks = {};
    var totalPairs = 0;
    ar.forEach(sock => {
        singleSocks[sock] ? singleSocks[sock]++ : singleSocks[sock] = 1
    });
    for (const socks in singleSocks) {
        totalPairs += Math.floor(singleSocks[socks] / 2)
    }
    return totalPairs
}

// Explanation
// https://www.hackerrank.com/challenges/sock-merchant/problem