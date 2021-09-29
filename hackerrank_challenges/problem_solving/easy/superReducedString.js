function superReducedString(s) {
    s = s.split("")
    var e = s[0];
    var k = 0;
    var j;
    var am;
    var r = 0
    var even;
    for (let i = 1; r < 10; i++) {
        if (s[i] !== e && ((i - k) === 1)) {
            console.log('a')
            k = i
        } else if (s[i] !== e && ((i - k) > 1) && (((i + 1) - (k + 1)) % 2 !== 0)) {
            console.log('b')
            j = i - 1
            am = (i + 1) - (k + 1) - 1
            s.splice(k, am)
            k = i
            e = s[i]
            i -= (am - 1)
        } else if (s[i] !== e && ((i - k) > 1) && (((i + 1) - (k + 1)) % 2 === 0)) {
            console.log('c')
            j = i - 1
            am = (i + 1) - (k + 1)
            s.splice(k, am)
            i -= (am - 1)
            k = i
            e = s[i]
        }
        r++
    }
    return s
    // var emptStr
    // var currChar
    // var amountCurrChar
    // loop through 
    // if item is not same as currchar, RA & amountCurrChar = 1
    // ... currChar defined & diff fr prev, amountCurrChar % 2 ? 
    // add currChar to emptStr 
    // if item is same, amountCurrChar++
}

console.log(superReducedString("aaabccddd"))

// s = s.split("")
// var emptStr = ""
// var currChar;
// var amountCurrChar = 0;
// for (let i = 0; i < s.length; i++) {
//     if (s[i] === currChar) {
//         amountCurrChar++
//     }
//     if ((s[i] !== currChar) && ((amountCurrChar % 2) && currChar)) {
//         emptStr = emptStr + currChar
//         currChar = s[i]
//         amountCurrChar = 1
//     } else if (!currChar || ((s[i] !== currChar) && (!(amountCurrChar % 2) && currChar))) {
//         currChar = s[i]
//         amountCurrChar = 1
//     }
// }
// if (amountCurrChar % 2) emptStr = emptStr + currChar
// return emptStr.length > 1 ? emptStr : "Empty String"
// var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
// var removed = myFish.splice(3, 2);
// console.log(myFish)