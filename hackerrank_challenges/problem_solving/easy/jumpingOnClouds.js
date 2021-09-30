function jumpingOnClouds(c) {
    var i = 0
    var moves = 0
    while (i < (c.length - 1)) {
        moves++
        c[i + 2] !== 1 ? i += 2 : i++
    }
    return moves
}

// explanation
// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem