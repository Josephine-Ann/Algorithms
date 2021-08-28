function appendAndDelete(s, t, k) {
    if (s === t) return "Yes"
    s = s.split("")
    var counter = 0
    if (t.length > s.length && ((t.length - s.length) % 2) === 0) {
        return "Yes"
    }
    for (let i = 0; i < s.length; i++) {
        if (t[i] === undefined) {
            if ((k - ((s.length) - ((s.length - t.length)))) % 2 === 0) return "Yes"
            i = s.length
        } else if (t[i] !== s[i]) {
            counter += (t.length) - ((s.slice(0, i)).length) + (s.slice(i, s.length)).length
            if ((k - counter) > 1) return "Yes"
            i = s.length
        }
    }
    return counter === k ? "Yes" : "No"
}

console.log(appendAndDelete("hackerhappy", "hackerrank", 9)) // yes
console.log(appendAndDelete("aaaaaaaaaa", "aaaaa", 7)) // yes
console.log(appendAndDelete("qwerasdf", "qwerbsdf", "6")) // no
console.log(appendAndDelete("aba", "aba", 7)) // yes
console.log(appendAndDelete("zzzzz", "zzzzzzz", 4)) // yes - affected
console.log(appendAndDelete("y", "yu", 2)) // No
console.log(appendAndDelete("qwerty", "zxcvbn", 100)) // Yes
console.log(appendAndDelete("abcd", "abcdert", 10)) // No



// function maxSubarraySumNaive(arr, num) {
//     var counter = 0
//     if (num > arr.length) {
//         return null;
//     }
//     var max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         temp = 0;
//         for (let j = 0; j < num; j++) {
//             counter++
//             temp += arr[i + j];
//         }
//         if (temp > max) {
//             max = temp;
//         }
//     }
//     console.log(counter)
//     // return max;
// }

// let frequencyCounter1 = {}
// let frequencyCounter2 = {}
// if (s === t) return "Yes"
// let counter = 0;
// for (let val of s) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
// }
// for (let val of t) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
// }
// for (let val in frequencyCounter1) {
//     if (!frequencyCounter2[val]) {
//         counter += frequencyCounter1[val]
//         t.indexOf()
//     } else if (frequencyCounter2[val] < frequencyCounter1[val]) {
//         counter += Math.abs(frequencyCounter2[val] - frequencyCounter1[val])
//     }
// }
// return counter <= k ? "Yes" : "No"