function caesarCipher(s, k) {
    s = s.split("")
    var uCas;
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    var newArr = s.map((item) => {
        if (item.toLowerCase() !== item) uCas = true
        var index = alphabet.findIndex(l => l === item.toLowerCase())
        if (index === -1) return item
        while ((index + k) >= alphabet.length) {
            index -= alphabet.length
        }
        index += k
        if (uCas) {
            uCas = false
            return alphabet[index].toUpperCase()
        }
        return alphabet[index]
    })
    return newArr.join("")
}

// explanation
// https://www.hackerrank.com/challenges/caesar-cipher-1/problem

