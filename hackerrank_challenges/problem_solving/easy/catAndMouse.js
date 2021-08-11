function catAndMouse(catA, catB, mouse) {
    var differenceCatA = mouse - catA
    var differenceCatB = mouse - catB
    if (differenceCatA < 0) {
        differenceCatA *= -1
    }
    if (differenceCatB < 0) {
        differenceCatB *= -1
    }
    if (differenceCatA === differenceCatB) return "Mouse C"
    if (Math.min(differenceCatA, differenceCatB) === differenceCatA) {
        return "Cat A"
    } else if (Math.min(differenceCatA, differenceCatB) === differenceCatB) {
        return "Cat B"
    }
}

console.log(catAndMouse(1, 2, 3))
console.log(catAndMouse(1, 3, 2))

// Cat B
// Mouse C

// Explanation
// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem



