
function kangaroo(x1, v1, x2, v2) {
    var xPath = x1 + v1
    var vPath = x2 + v2
    var growing = false
    var distance = Math.max(xPath, vPath) - Math.min(xPath, vPath)
    var possible = xPath === vPath;
    for (let i = 0; (!growing && !possible); i++) {
        xPath += v1
        vPath += v2
        if (xPath === vPath) possible = true
        if ((Math.max(xPath, vPath) - Math.min(xPath, vPath)) >= distance) growing = true
    }
    return possible ? "YES" : "NO"
}
console.log(kangaroo(43, 2, 70, 2))

// Explanation 

// https://www.hackerrank.com/challenges/kangaroo/problem