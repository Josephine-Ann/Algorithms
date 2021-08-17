function hurdleRace(k, height) {
    var max;
    height.forEach(h => {
        if (!max || max < h) max = h
    });
    return max > k ? max - k : 0
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]))




// explanation
// https://www.hackerrank.com/challenges/the-hurdle-race/problem