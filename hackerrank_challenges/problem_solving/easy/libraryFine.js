function libraryFine(d1, m1, y1, d2, m2, y2) {
    if (y1 === y2 && m1 === m2 && d1 === d2) return 0
    if (y1 < y2) return 0
    if (y1 > y2) return 10000
    if (m1 < m2) return 0
    if (m1 > m2) return Math.abs((m2 - m1) * 500)
    if (d1 < d2) return 0
    if (d1 > d2) return Math.abs((d2 - d1) * 15)
}

// explanation
// https://www.hackerrank.com/challenges/library-fine/problem