function gameOfThrones(s) {
    // Write your code here
    var freqC = {}
    s = s.split("")
    s.forEach(char => {
        freqC[char] ? freqC[char]++ : freqC[char] = 1
    });
    var sLength = Object.keys(freqC).length
    var counterOdd = 0
    var counterSingle = 0
    console.log(freqC)
    for (const char in freqC) {
        if ((freqC[char] % 2 !== 0) && (sLength % 2 !== 0)) {
            return "NO"
        } else if ((freqC[char] % 2 !== 0) && (sLength % 2 === 0) && counterOdd < 2) {
            counterOdd++
        } else if ((freqC[char] % 2 !== 0) && (sLength % 2 === 0) && counterOdd === 2 && (freqC[char] !== 1)) {
            return "NO"
        } else if ((freqC[char] % 2 !== 0) && (sLength % 2 === 0) && (freqC[char] === 1) && (counterSingle < 1)) {
            console.log(char + " yo")
            counterSingle++
        } else if ((freqC[char] % 2 !== 0) && (sLength % 2 === 0) && (freqC[char] === 1) && (counterSingle >= 1)) {
            console.log(char + " yi")
            return "NO"
        }
    }
    return "YES"
}
console.log(gameOfThrones("cdcdcdcdeeeef"))