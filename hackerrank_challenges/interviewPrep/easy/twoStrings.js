function twoStrings(s1, s2) {
    s1 = s1.split('')
    let result;
    s1.forEach((element) => {
        if (s2.includes(element)) {
            result = 'YES'
        }
    });
    if (!result) {
        result = 'NO'
    }
    return result

}

// explanation

// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=dictionaries-hashmaps