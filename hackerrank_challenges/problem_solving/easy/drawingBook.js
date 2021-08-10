function pageCount(lastPage, page) {
    if (lastPage === page || page === 1) return 0;
    var firstLoop = 2
    var frontCount = 1
    var backCount;
    var secondLoop;
    if (lastPage % 2 === 0) {
        secondLoop = lastPage - 1
        backCount = 1
    } else {
        secondLoop = lastPage
        backCount = 0;
    }
    for (let i = firstLoop; i < lastPage; i += 2) {
        if (i === page || (i + 1) === page) {
            i = lastPage
        } else {
            frontCount++
        }
    }
    for (let i = secondLoop; i > 1; i -= 2) {
        if (i === page || (i - 1) === page) {
            i = 1
        } else {
            backCount++
        }
    }
    return Math.min(frontCount, backCount)
    // if book is even, start search from back 
    // from next odd number in descending number and count 1
    // if not, do the same and don't count 1
    // loop through, 2 at a time:
    // -If either current i or previous i are p, stop loop
    // -If not, add to back count
    // If book is 
}

console.log(pageCount(6, 2))

// if (p === 1 || p === n) return 0
// var counterFront;
// var counterBack;
// p % 2 !== 0 ? counterFront = 0 : counterFront = 1
// p % 2 !== 0 ? counterBack = 0 : counterBack = 1
// for (let i = (counterFront + 1); i < n; i += 2) {
//     if (i === p || (i - 1) === p) {
//         i = n
//     } else {
//         counterFront++
//     }
// }
// var start = n - counterBack
// for (let i = start; i > 1; i -= 2) {
//     if (i === p || (i - 1) === p) {
//         i = 1
//     } else {
//         counterBack++
//     }
// }
// return Math.min(counterFront, counterBack)