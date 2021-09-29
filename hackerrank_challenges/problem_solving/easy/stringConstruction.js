function stringConstruction(s) {
    s = s.split("")
    var str = ""
    var cost = 0
    s.forEach(char => {
        if (!str.includes(char)) cost++
        str = str + char
    });
    return cost
}

console.log(stringConstruction("abab"))

// explanation
// https://www.hackerrank.com/challenges/string-construction/problem