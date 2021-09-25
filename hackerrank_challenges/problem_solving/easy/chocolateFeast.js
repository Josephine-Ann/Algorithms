function chocolateFeast(n, c, m) {
    var brsPrchsed = Math.floor(n / c)
    var wrps = brsPrchsed
    var buying;
    var wrpsRtrd = 0;
    var wrpsLft = 0;
    while (wrps >= m) {
        buying = Math.floor(wrps / m)
        wrpsLft = (wrps % m)
        wrpsRtrd = (buying)
        brsPrchsed += (buying)
        wrps = (wrpsRtrd + wrpsLft)
    }
    return brsPrchsed
}

console.log(chocolateFeast(7, 3, 2))

// explanation
// https://www.hackerrank.com/challenges/chocolate-feast/problem