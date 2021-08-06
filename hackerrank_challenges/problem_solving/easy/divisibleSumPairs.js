function divisibleSumPairs(n, k, ar) {
    var total = 0
    var pairs = {}
    for (let i = 0; i < ar.length; i++) {
        for (let j = 0; j < ar.length; j++) {
            if ((ar[i] + ar[j]) % k === 0 && !pairs[i + " " + j] && !pairs[j + " " + i] && i !== j) {
                total++
                pairs[i + " " + j] = "yes"
                console.log(i + " " + j)
            }
        }
    }
    return total
}

// Explanation

// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem