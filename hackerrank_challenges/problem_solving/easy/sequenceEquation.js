function permutationEquation(p) {
    var reference;
    var newArray = []
    for (let x = 1; x < (p.length + 1); x++) {
        reference = p.indexOf(x) + 1
        newArray.push(p.indexOf(reference) + 1)
    }
    return newArray
}

console.log(permutationEquation([2, 3, 1]))
// 2 3 1

// explanation
// https://www.hackerrank.com/challenges/permutation-equation/problem