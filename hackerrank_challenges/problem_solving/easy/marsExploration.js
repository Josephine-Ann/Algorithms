function marsExploration(s) {
    var expected = ["S", "O", "S"]
    s = s.split("")
    var finalCount = 0
    var j = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== expected[j]) {
            finalCount++
        }
        j === 2 ? j = 0 : j++
    }
    return finalCount
}

// explanation
// https://www.hackerrank.com/challenges/mars-exploration/problem