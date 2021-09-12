function howManyGames(p, d, m, s) {
    if (p > s) return 0
    var counter = 1
    s -= p
    while (p > m && s > 0) {
        p -= d
        if (p > m) {
            s -= p
            counter++
        }
    }
    var withMin = Math.floor(s / m)
    if (withMin) counter += withMin
    return counter
}

// explanation
// https://www.hackerrank.com/challenges/halloween-sale/problem


