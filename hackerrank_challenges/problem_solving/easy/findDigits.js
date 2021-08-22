function findDigits(n) {
    var ar = n.toString().split("")
    var singNum;
    var counter = 0
    ar.forEach(num => {
        singNum = parseInt(num, 10)
        if (n % singNum === 0) counter++
    });
    return counter
}

console.log(findDigits(1012))

// explanation
// https://www.hackerrank.com/challenges/find-digits/problem