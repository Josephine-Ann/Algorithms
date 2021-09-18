function palindromeIndex(s) {
    s = s.split("")
    var j = s.length - 1
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[j] && s[i + 1] === s[j] && (s[i + 2] === s[j - 1])) {
            return i
        } else if (s[i] !== s[j] && s[j - 1] === s[i]) {
            return j
        }
        j--
    }
    return -1
}

// explanation
// https://www.hackerrank.com/challenges/palindrome-index/problem