function migratoryBirds(arr) {
    var birds = {}
    var biggest = 0;
    var result = 0;
    for (let i = 0; i < arr.length; i++) {
        birds[arr[i]] ? birds[arr[i]]++ : birds[arr[i]] = 1
    }
    for (const bird in birds) {
        if (birds[bird] > result) {
            result = birds[bird]
            biggest = bird
        } else if (birds[bird] === result && bird < biggest) {
            result = birds[bird]
            biggest = bird
        }
    }
    return biggest
}

// explanation

// https://www.hackerrank.com/challenges/migratory-birds/problem