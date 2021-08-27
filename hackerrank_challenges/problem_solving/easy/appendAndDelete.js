function appendAndDelete(s, t, k) {
    if (s === t) return "Yes"
    s = s.split("")
    var counter = 0
    if (t.length > s.length && ((t.length - s.length) % 2) === 0) {
        return "Yes"
    }
    for (let i = 0; i < s.length; i++) {
        if (t[i] === undefined) {
            if ((k - ((s.length) - ((s.length - t.length)))) % 2 === 0) return "Yes"
            i = s.length
        } else if (t[i] !== s[i]) {
            counter += (t.length) - ((s.slice(0, i)).length) + (s.slice(i, s.length)).length
            if ((k - counter) > 1) return "Yes"
            i = s.length
        }
    }
    return counter === k ? "Yes" : "No"
}

// explanation
// https://github.com/Josephine-Ann/Algorithms/blob/master/hackerrank_challenges/problem_solving/easy/appendAndDelete.js