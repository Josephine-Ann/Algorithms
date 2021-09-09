function hackerrankInString(s) {
    var hackerRank = ["h", "a", "c", "k", "e", "r", "r", "a", "n", "k"]
    var counter = 0
    s = s.split("")
    var j = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === hackerRank[j]) {
            j++
            counter++
        }
    }
    return counter === hackerRank.length ? "YES" : "NO"
}
console.log(hackerrankInString("rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt"))