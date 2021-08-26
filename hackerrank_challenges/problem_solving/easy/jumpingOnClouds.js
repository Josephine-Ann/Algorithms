function jumpingOnClouds(c, k) {
    var energy = 100
    c[0] === 1 ? energy -= 3 : energy -= 1
    for (var i = k; i < c.length; i += k) {
        c[i] === 1 ? energy -= 3 : energy--
        if ((i + k) > c.length) {
            i = i + k - c.length
            c[i] === 1 ? energy -= 3 : energy--
        } else if ((i + k) === c.length) {
            i === 0
        }
    }
    return energy
}

// console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2))
console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3))

// explanation
// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem