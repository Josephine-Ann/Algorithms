function strangeCounter(t) {
    if (t < 3) return 4 - t
    var first = Math.ceil(Math.log2((t + 2) / 3))
    if ((((2 ** first) * 3)) - 2 === t) return (((2 ** first) * 3)) - 2
    return (((2 ** first) * 3) < t) ? ((2 ** first) * 3) - 2 + (((2 ** first) * 3) - t) : ((2 ** first) * 3) - 2 - t // -> 46/time of SP of 45, prev
}

// explanation
// https://www.hackerrank.com/challenges/strange-code/problem
