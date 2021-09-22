function minimumDistances(arr) {
    var j = 1
    var pairs = []
    for (let i = 0; i < arr.length; i++) {
        while (j !== arr.length && (arr[i] !== arr[j] || j === i)) {
            j++
        }
        if (arr[j] === arr[i]) {
            pairs.push([i, j])
        }
        j = 0
    }
    if (pairs.length === 0) return - 1
    return Math.min(...(pairs.map(pair => Math.abs(pair[0] - pair[1]))))
}

console.log(minimumDistances([3, 2, 1, 2, 3]))

// explanation
// https://www.hackerrank.com/challenges/minimum-distances/problem