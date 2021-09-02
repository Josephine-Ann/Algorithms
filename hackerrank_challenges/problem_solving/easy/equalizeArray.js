function equalizeArray(arr) {
    let frequencyCounter = {}
    for (let val of arr) {
        frequencyCounter[val] = (frequencyCounter[val] || 0) + 1
    }
    var max = 0
    var whichMax;
    for (const property in frequencyCounter) {
        if (frequencyCounter[property] > max) {
            max = frequencyCounter[property]
            whichMax = property
        }
    }
    return arr.length - frequencyCounter[whichMax]
}

console.log(equalizeArray([3, 3, 2, 1, 3]))

// explanation
// https://www.hackerrank.com/challenges/equality-in-a-array/problem