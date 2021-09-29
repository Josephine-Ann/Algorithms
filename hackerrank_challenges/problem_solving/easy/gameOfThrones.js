function gameOfThrones(s) {
    var freqC = {}
    s = s.split("")
    s.forEach(char => {
        freqC[char] ? freqC[char]++ : freqC[char] = 1
    });
    var sLength = Object.keys(freqC).length
    var counterOdd = 0
    var counterSingle = 0
    for (const char in freqC) {
        if ((freqC[char] % 2 !== 0) && (sLength % 2 !== 0)) {
            return "NO"
        } else if ((freqC[char] % 2 !== 0) && (sLength % 2 === 0) && counterOdd < 2) {
            counterOdd++
        } else if ((freqC[char] % 2 !== 0) && (sLength % 2 === 0) && counterOdd === 2 && (freqC[char] !== 1)) {
            return "NO"
        } else if ((freqC[char] % 2 !== 0) && (sLength % 2 === 0) && (freqC[char] === 1) && (counterSingle < 1)) {
            counterSingle++
        } else if ((freqC[char] % 2 !== 0) && (sLength % 2 === 0) && (freqC[char] === 1) && (counterSingle >= 1)) {
            return "NO"
        }
    }
    return "YES"
}
console.log(gameOfThrones("cdcdcdcdeeeef"))

// explanation
// https://www.hackerrank.com/challenges/game-of-thrones/problem