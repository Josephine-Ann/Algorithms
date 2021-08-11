function catAndMouse(catA, catB, mouse) {
    var differences = [(mouse - catA), (mouse - catB)]
    differences = differences.map(Math.abs);
    if (differences[0] === differences[1]) return "Mouse C"
    return Math.min(...differences) === differences[0] ? "Cat A" : "Cat B"
}

console.log(catAndMouse(1, 2, 3))
console.log(catAndMouse(1, 3, 2))

// Cat B
// Mouse C

// Explanation
// https://www.hackerrank.com/challenges/cats-and-a-mouse/problem



