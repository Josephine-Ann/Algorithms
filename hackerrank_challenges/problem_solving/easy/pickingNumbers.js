function pickingNumbers(a) {
    var numbersBeingCounted = {};
    var max = 0
    a.forEach(num => {
        numbersBeingCounted[num] ? numbersBeingCounted[num]++ : numbersBeingCounted[num] = 1
    });
    for (const num in numbersBeingCounted) {
        if (numbersBeingCounted[num] > max) max = numbersBeingCounted[num]
        if (numbersBeingCounted[parseInt(num, 10) + 1]) max = Math.max(max, (numbersBeingCounted[parseInt(num, 10) + 1] + numbersBeingCounted[num]))
        if (numbersBeingCounted[parseInt(num, 10) - 1]) max = Math.max(max, (numbersBeingCounted[parseInt(num, 10) - 1] + numbersBeingCounted[num]))
    }
    return max
}

console.log(pickingNumbers([4, 97, 5, 97, 97, 4, 97, 4, 97, 97, 97, 97, 4, 4, 5, 5, 97, 5, 97, 99, 4, 97, 5, 97, 97, 97, 5, 5, 97, 4, 5, 97, 97, 5, 97, 4, 97, 5, 4, 4, 97, 5, 5, 5, 4, 97, 97, 4, 97, 5, 4, 4, 97, 97, 97, 5, 5, 97, 4, 97, 97, 5, 4, 97, 97, 4, 97, 97, 97, 5, 4, 4, 97, 4, 4, 97, 5, 97, 97, 97, 97, 4, 97, 5, 97, 5, 4, 97, 4, 5, 97, 97, 5, 97, 5, 97, 5, 97, 97, 97]))

// explanation:
// https://www.hackerrank.com/challenges/picking-numbers/problem
