function funnyString(s) {
    var first = s.split('')
    var second = first.reverse().join("")
    first = s
    var j = 0
    for (let i = 1; i < first.length; i++) {
        if ((Math.abs(first.charCodeAt(i) - first.charCodeAt(j))) !== (Math.abs(second.charCodeAt(i) - second.charCodeAt(j)))) {
            return "Not funny"
        }
        j++
    }
    return "Funny"
}

// explanation
// https://www.hackerrank.com/challenges/funny-string/problem