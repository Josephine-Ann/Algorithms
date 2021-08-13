function utopianTree(n) {
    var size = 1
    var count = n
    var season = "spring"
    while (count > 0) {
        if (season === "spring") {
            size *= 2
            season = "summer"
        } else {
            size += 1
            season = "spring"
        }
        count--
    }
    return size
}

console.log(utopianTree(4))
// 0, 1

// explanation
// https://www.hackerrank.com/challenges/utopian-tree/problem