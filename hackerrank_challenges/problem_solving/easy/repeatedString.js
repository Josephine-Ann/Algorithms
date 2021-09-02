function repeatedString(s, n) {
    s = s.split("")
    var aCount = 0;
    s.forEach(item => {
        if (item === "a") aCount++
    });
    var toMultiplyAs = Math.floor(n / s.length)
    aCount *= toMultiplyAs
    var remainder = n - (toMultiplyAs * s.length)
    for (let i = 0; i < remainder; i++) {
        if (s[i] === "a") aCount++
    }
    return aCount
}

console.log(repeatedString("aba", 10))

// explanation
// https://www.hackerrank.com/challenges/repeated-string/problem
