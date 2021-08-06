function checkMagazine(magazine, note) {
    let answer = true;
    const frequencyCounterMag = {}
    const frequencyCounterNote = {}
    magazine.forEach((element) => {
        let key = element
        frequencyCounterMag[key] ? frequencyCounterMag[key]++ : frequencyCounterMag[key] = 1
    });
    note.forEach((element) => {
        let othKey = element
        frequencyCounterNote[othKey] ? frequencyCounterNote[othKey]++ : frequencyCounterNote[othKey] = 1
    });
    for (const property in frequencyCounterNote) {
        if (!frequencyCounterMag[property] || frequencyCounterMag[property] < frequencyCounterNote[property]) {
            answer = false
        }
    }
    if (answer === false) {
        answer = 'No'
    } else {
        answer = 'Yes'
    }
    return console.log(answer)
}

// explanation

// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps