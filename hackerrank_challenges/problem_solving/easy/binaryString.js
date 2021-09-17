function beautifulBinaryString(b) {
    b = b.split("")
    var j = 1
    var k = 2
    var counter = 0
    for (let i = 0; i < (b.length - 2); i++) {
        if (b[i] === "0" && b[j] === "1" && b[k] === "0") {
            b[k] = b[j]
            counter++
        }
        j++
        k++
    }
    return counter
}

// explanation
// https://www.hackerrank.com/challenges/beautiful-binary-string/problem
