function workbook(n, k, arr) {
    var pages = {}
    var page = 1
    var numberOfPages;
    var j = 1
    var startingPage
    for (let i = 0; i < arr.length; i++) {
        numberOfPages = Math.ceil(arr[i] / k)
        while (numberOfPages > 0 && j <= arr[i]) {
            pages[page] = [page, []]
            startingPage = j
            endingPage = (startingPage + k - 1)
            for (j; j <= endingPage; j++) {
                pages[page][1].push(j)
                if (j >= arr[i]) {
                    break
                }
            }
            page++
            numberOfPages--
        }
        j = 1
    }
    var counter = 0
    for (const property in pages) {
        if (pages[property][1].includes(pages[property][0])) {
            counter++
        }
    }
    return counter
}

console.log(workbook(10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31]))

// explanation
// https://www.hackerrank.com/challenges/lisa-workbook/problem