function squares(a, b) {
    function isSquared(num) {
        var square = {}
        var numCopy = num
        for (let i = 1; numCopy > 0; i++) {
            square[i] = new Array(i).join(1).split('')
            numCopy -= i
            for (const property in square) {
                if (property !== i) {
                    square[property].push(1)
                    numCopy--
                }
            }
        }
        var keys = Object.keys(square)
        var lastKey = keys[keys.length - 1]
        var lengthLastKey = square[lastKey].length
        return (lengthLastKey * lengthLastKey) === num
    }
    var countSquared = 0
    for (let i = a; i <= b; i++) {
        // if (isSquared(i)) {
        //     countSquared++
        // }
        console.log(i)
    }
    return countSquared
}

console.log(squares(385793959, 712365911))
// var arr =
