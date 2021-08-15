function getMoneySpent(keyboards, drives, b) {
    var max = 0
    keyboards.forEach(board => {
        drives.forEach(drive => {
            if ((board + drive) > max && (board + drive) <= b) {
                max = board + drive
            }
        })
    })
    return max === 0 ? -1 : max
}

console.log(getMoneySpent([3, 1], [5, 2, 8], 10))