function rotLeft(a, d) {
    const startToAddToEnd = a.slice(0, d)
    a = a.concat(startToAddToEnd)
    return a.slice(d, (a.length))
}

// explanation

// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays