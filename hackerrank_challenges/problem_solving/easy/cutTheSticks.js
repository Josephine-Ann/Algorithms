function cutTheSticks(arr) {
    var finalArray = [arr.length]
    var newArr = []
    var min;
    while (arr.length > 1) {
        arr.forEach(num => {
            if (!min || num < min) min = num
        });
        newArr = arr.filter(num => num !== min)
        finalArray.push(newArr.length)
        arr = newArr
        arr = arr.map(num => {
            return num - min
        })
        min = Math.max(...arr)
    }
    if (finalArray[finalArray.length - 1] === 0) finalArray.splice(finalArray.length - 1)
    return finalArray
}

// explanation
// https://www.hackerrank.com/challenges/cut-the-sticks/problem