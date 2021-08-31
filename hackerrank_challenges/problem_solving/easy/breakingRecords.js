function breakingRecords(scores) {
    var min = scores[0];
    var max = scores[0];
    var quanMin = 0;
    var quanMax = 0;
    scores.forEach(score => {
        if (score < min && score !== scores[0]) {
            quanMin++
            min = score
        }
        if (score > max && score !== scores[0]) {
            quanMax++
            max = score
        }
    });
    return [quanMax, quanMin]
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]))
// console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]))