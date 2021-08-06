
function timeConversion(s) {
    var poa;
    s[s.length - 2] === 'A' ? poa = "A" : poa = "P"
    var firstTwoDigits = s.slice(0, 2)
    var middleDigits = s.slice(2, (s.length - 2))
    if (poa === "P") {
        firstTwoDigits = parseInt(firstTwoDigits, 10)
        if (firstTwoDigits < 12) firstTwoDigits += 12
    } else if (poa === "A" && firstTwoDigits === "12") {
        firstTwoDigits = "00"
    }
    if (typeof firstTwoDigits === "number") firstTwoDigits = firstTwoDigits.toString()
    var final = firstTwoDigits.concat(middleDigits)
    return final
}

// Given a time in -hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

// Sample Input 0

// 07:05:45PM
// Sample Output 0

// 19:05:45