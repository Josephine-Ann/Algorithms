
function saveThePrisoner(prisoners, candy, start) {
    var firstRound = start + candy - 1
    if (firstRound < prisoners) return firstRound
    candy -= prisoners - start + 1
    while (candy > prisoners) {
        candy -= prisoners
    }
    return candy === 0 ? prisoners : candy
}


console.log(saveThePrisoner(999999999, 999999999, 1))

// explanation
// https://www.hackerrank.com/challenges/save-the-prisoner/problem