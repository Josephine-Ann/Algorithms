function anagram(s) {
    // Write your code here
    s = s.split("")
    var counter1 = 0
    var counter2 = 0
    if (s.length % 2) return -1
    var s1 = s.splice(0, ((s.length / 2)))
    var str1 = s1
    var s2 = s
    var str2 = s2
    var s2Index;
    var s1Index;
    for (let i = 0; i < (s1.length); i++) {
        if (!str2.includes(s1[i])) {
            counter1++
        } else if (str2.includes(s1[i])) {
            s2Index = str2.findIndex(t => t === s1[i]);
            str2.splice(s2Index, 1)
        }
        if (!str1.includes(s2[i])) {
            counter2++
        } else if (str1.includes(s2[i])) {
            s1Index = str1.findIndex(t => t === s2[i]);
            str2.splice(s2Index, 1)
        }
    }
    return Math.min(counter1, counter2)
}

console.log(anagram("xaxbbbxx"))
// fdhlvosf pafhalll
// FHL

// wliuzzlrhzpbwknftgokud
