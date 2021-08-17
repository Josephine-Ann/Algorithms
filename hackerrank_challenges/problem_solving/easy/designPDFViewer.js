function designerPdfViewer(h, word) {
    var alphabet = {}
    for (let i = 65; i < 91; i++) {
        alphabet[String.fromCharCode(i)] = h[i - 65]
    }
    word = word.split("")
    var height = 0;
    var width = 0;
    var letter;
    for (let j = 0; j < (word.length); j++) {
        letter = word[j].toUpperCase()
        width++
        height = Math.max(alphabet[letter], height)
    }
    return height * width
}

console.log(designerPdfViewer([
    1, 3, 1, 3, 1, 4, 1, 3,
    2, 5, 5, 5, 5, 5, 5, 5,
    5, 5, 5, 5, 5, 5, 5, 5,
    5, 5
],
    "abc"))

