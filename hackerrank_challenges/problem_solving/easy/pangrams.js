function pangrams(s) {
    const alpha = Array.from(Array(26)).map((e, i) => i + 97);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    let counter = 0;
    s = s.split("").map(element => {
        return element.toLowerCase()
    });
    alphabet.forEach(element => {
        if (s.includes(element)) counter++
    });
    return counter === 26 ? "pangram" : "not pangram"
}

// explanation
// https://www.hackerrank.com/challenges/pangrams/problem
