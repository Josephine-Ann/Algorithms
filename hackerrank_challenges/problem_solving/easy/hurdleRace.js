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

// function slidingWindow(array) {
//     var totals = []
//     for (let i = 0; i < array.length; i++) {
//         totals.push(array[i] + array[i + 1] + array[i + 2])
//     }
//     return totals
// }

// console.log(slidingWindow([900, 1100, 1000, 1050, 750,
//     900, 890, 1000, 1200, 1500, 1000, 1200, 1400, 1500, 1400, 1000, 900, 895, 1040, 1200]))

