function countingValleys(steps, path) {
    var valleyCount = 0;
    var counterOn = false;
    var counter = 0;
    for (let i = 0; i < steps; i++) {
        path[i] === "D" ? counter-- : counter++
        if (counter < 0 && counterOn === false) {
            counterOn = true
            valleyCount++
        } else if (counterOn === true && counter === 0) {
            counterOn = false
        }
    }
    return valleyCount
}


// console.log(countingValleys(8, "UDDDUDUU"))
// console.log(countingValleys(10, "UDUUUDUDDD"))
// console.log(countingValleys(12, "DDUUDDUDUUUD"))

// explanation
// https://www.hackerrank.com/challenges/counting-valleys/problem?h_r=next-challenge&h_v=zen

