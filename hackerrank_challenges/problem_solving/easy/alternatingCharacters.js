function alternatingCharacters(s) {
    s = s.split('')
    let last;
    let count = 0;
    s.forEach(element => {
        if (last && last === element) {
            count++
        } else {
            last = element
        }
    });
    return count
}

// Explanation
// https://www.hackerrank.com/challenges/alternating-characters/problem