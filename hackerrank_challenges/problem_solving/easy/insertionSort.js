function insertionSort2(n, arr) {
    var sorted = false
    var x = 0
    var y = 0
    var temp1;
    var temp2;
    var currentItem = arr[0]
    var lastItem = arr[arr.length - 1]
    var finalRound = false
    var copy = arr
    var j = 0
    var moves = arr.map(element => {
        if (element > arr[j + 1] || arr[x] < arr[x - 1]) return true
        return false
        j++
    });
    while (!sorted) {
        console.log(currentItem)
        if (currentItem === lastItem) finalRound = true
        if (arr[x] > arr[x + 1] || arr[x] < arr[x - 1]) {
            temp1 = arr[x]
            temp2 = arr[x + 1]
            arr[x] = temp2
            arr[x + 1] = temp1
            currentItem = temp2
            if (arr[x - 1] < arr[x] && (arr[x] !== lastItem)) {
                x++
            } else if (arr[x - 1] > arr[x]) {
                x--
            }
            if (x === -1) x = 0
        } else if (arr[x] < arr[x + 1] && x !== (arr.length - 1)) {
            if (finalRound) sorted = true
            x++
        } else if (arr[x] > arr[x - 1] && x === (arr.length - 1)) {
            sorted = true
        }
        if (copy[y] === arr[j]) {
            y++
        } else {
            var j = arr.findIndex(i => i === copy[y])
            j === y ? y++ : y = j
        }
    }
    return arr
}

console.log(insertionSort2(6, [1, 4, 3, 5, 6, 2]))

