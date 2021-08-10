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
}

console.log(pageCount(6, 2))

