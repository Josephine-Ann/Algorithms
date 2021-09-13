function weightedUniformStrings(s, queries) {
    var finalWeights = []
    var currentString = "abc"
    for (let i = 0; i < s.length; i++) {
        if (s[i] === currentString[currentString.length - 1] || currentString.length === 0) {
            currentString = currentString.concat(s[i])
            finalWeights.push(currentString.length * (s.charCodeAt(i) - 96))
        } else {
            currentString = s[i]
            finalWeights.push(currentString.length * (s.charCodeAt(i) - 96))
        }
    }
    queries = queries.map(query => {
        return finalWeights.includes(query) ? "Yes" : "No"
    });
    return queries
}

// explanation
// https://www.hackerrank.com/challenges/weighted-uniform-string/problem