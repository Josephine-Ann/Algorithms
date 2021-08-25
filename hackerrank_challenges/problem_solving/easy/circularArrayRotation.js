function circularArrayRotation(a, k, queries) {
    if (a.length < k) {
        var timesIntoK = k / a.length
        if (timesIntoK % 2 === 1) a = a.reverse()
        k = k % a.length
    }
    var end = a.slice((a.length - k), a.length)
    var start = a.slice(0, (a.length - k))
    a = end.concat(start)
    var result = []
    for (let i = 0; i < queries.length; i++) {
        result.push(a[queries[i]])
    }
    return result
}

console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]))

// explanation
// https://www.hackerrank.com/challenges/circular-array-rotation/problem

