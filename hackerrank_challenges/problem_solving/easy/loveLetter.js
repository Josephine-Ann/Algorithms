function theLoveLetterMystery(s) {
    function reverseString(arr) {
        return arr.map((e, i, a) => a[(a.length - 1) - i])
    }
    function isPalindrome(str) {
        var len = Math.floor(str.length / 2);
        for (var i = 0; i < len; i++)
            if (str[i] !== str[str.length - i - 1])
                return false;
        return true;
    }
    s = s.split("")
    var sReverse = reverseString(s)
    var difference = 0
    for (let i = (s.length - 1); i > 0; i--) {
        if (s[i] !== sReverse[i]) {
            difference += Math.abs(s[i].charCodeAt(0) - sReverse[i].charCodeAt(0))
            s[i] = sReverse[i]
            sReverse = reverseString(s)
        }
        if (isPalindrome(s)) {
            return difference
        }
    }
    return difference
}

// explanation
// https://www.hackerrank.com/challenges/the-love-letter-mystery/problem