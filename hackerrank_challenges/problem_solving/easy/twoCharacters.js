

function alternate(s) {
    function onlyOriginal(array) {
        var items = {}
        array.forEach(element => {
            if (!items[element]) items[element] = []
        });
        return items
    }
    function arrayOfOriginals(obj) {
        var newArray = []
        for (const property in obj) {
            newArray.push(property)
        }
        return newArray
    }

    function makeString(l1, l2, array) {
        var correctArray = []
        var incorrectArray = []
        array.forEach(item => {
            if ((item === l1 || item === l2) && item !== correctArray[correctArray.length - 1]) correctArray.push(item)
        });
        array.forEach(item => {
            if ((item === l1 || item === l2) && item) incorrectArray.push(item)
        });
        return correctArray.length === incorrectArray.length ? correctArray.length : 0
    }
    s = s.split("")
    if (s.length === 0) return 0
    var max = 0
    var toTest = onlyOriginal(s)
    var originalItems = arrayOfOriginals(toTest)
    if (originalItems.length === 1) return 0
    for (const char in toTest) {
        originalItems.forEach(item => {
            max = Math.max(makeString(char, item, s), max)
        });
    }
    return max === 1 ? 0 : max
}



console.log(alternate("uyetuppelecblwipdsqabzsvyfaezeqhpnalahnpkdbhzjglcuqfjnzpmbwprelbayyzovkhacgrglrdpmvaexkgertilnfooeazvulykxypsxicofnbyivkthovpjzhpohdhuebazlukfhaavfsssuupbyjqdxwwqlicbjirirspqhxomjdzswtsogugmbnslcalcfaxqmionsxdgpkotffycphsewyqvhqcwlufekxwoiudxjixchfqlavjwhaennkmfsdhigyeifnoskjbzgzggsmshdhzagpznkbahixqgrdnmlzogprctjggsujmqzqknvcuvdinesbwpirfasnvfjqceyrkknyvdritcfyowsgfrevzon"))

// explanation
// https://www.hackerrank.com/challenges/two-characters/problem