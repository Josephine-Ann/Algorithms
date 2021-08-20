function beautifulDays(i, j, k) {
    var r;
    var quantityBeautifulNumbers = 0;
    for (i; i < j + 1; i++) {
        r = i + "";
        r = r.split("").reverse().join("");
        if ((i - r) % k === 0) quantityBeautifulNumbers++
    }
    return quantityBeautifulNumbers
}

console.log(beautifulDays(20, 23, 6))

// explanation
// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
