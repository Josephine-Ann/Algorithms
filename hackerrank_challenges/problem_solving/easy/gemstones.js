function gemstones(arr) {
    var minerals = []
    var first = arr[0].split("")
    var count = 0;
    first.forEach(item => {
        for (let i = 1; i < arr.length; i++) {
            if (arr[i].includes(item)) {
                count++
            }
        }
        if (count === (arr.length - 1)) {
            minerals.push(item)
        }
        count = 0
    });
    return [...new Set(minerals)].length
}

// explanation
// https://www.hackerrank.com/challenges/gem-stones/problem