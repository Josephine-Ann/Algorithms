function birthday(s, d, m) {
    let i = 0
    var total;
    m > 1 ? total = addTogether(s.slice(i, (m + 1))) : total = s[0]
    var allIncidences = 0
    function addTogether(arr) {
        var all = 0
        for (let j = 0; j < arr.length - 1; j++) {
            all += arr[j]
        }
        return all
    }
    for (i; i < s.length; i++) {
        if (total === d) {
            allIncidences++
        }
        total -= s[i]
        total += s[m + i]
    }
    return allIncidences
}

// explanation

// https://www.hackerrank.com/challenges/the-birthday-bar/problem