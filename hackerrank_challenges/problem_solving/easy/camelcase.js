function camelcase(s) {
    s = s.split('')
    var finalCount = 0
    s.forEach(letter => {
        if (letter.toUpperCase() === letter) finalCount++
    });
    return finalCount + 1
}

console.log(camelcase('helloIsItMeYouAreLookingFor'))

// explanation
// https://www.hackerrank.com/challenges/camelcase/problem