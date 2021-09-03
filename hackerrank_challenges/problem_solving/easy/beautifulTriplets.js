function beautifulTriplets(d, arr) {
    var finalCount = 0;
    arr.forEach(num => {
        if (arr.includes(d + num) && arr.includes(d + num + d)) {
            finalCount++
        }
    });
    return finalCount
}

console.log(beautifulTriplets(3, [1, 2, 4, 5, 7, 8, 10]))

// https://www.hackerrank.com/challenges/beautiful-triplets/problem
// explanation
