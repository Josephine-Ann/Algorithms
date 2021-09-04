function serviceLane(width, cases) {
    var result = []
    cases.forEach(c => {
        result.push(Math.min(...width.slice(c[0], (c[1] + 1))))
    });
    return result
}

// explanation
// https://www.hackerrank.com/challenges/service-lane/problem