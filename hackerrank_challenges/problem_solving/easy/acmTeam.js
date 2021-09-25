function acmTeam(topic) {
    var splitTeams = {}
    var counters = {}
    var max = 0;
    topic.forEach(function (t, i) {
        splitTeams[i + 1] = t.split("")
        topic.forEach(function (p, i2) {
            if (i2 !== i && !counters[i2 + " " + i]) counters[i + " " + i2] = [i, i2, 0]
        })
    });
    for (const property in counters) {
        var j = counters[property][0]
        var k = counters[property][1]
        var jArr = splitTeams[j + 1]
        var kArr = splitTeams[k + 1]
        for (let i = 0; i < jArr.length; i++) {
            if (jArr[i] === "1" || kArr[i] === "1") counters[property][2]++
        }
        if (counters[property][2] >= max) {
            max = counters[property][2]
        }
    }
    var numberOfTeams = 0
    for (const property in counters) {
        if (counters[property][2] === max) {
            numberOfTeams++
        }
    }
    return [max, numberOfTeams]
}

console.log(acmTeam(["10101", "11100", "11010", "00101"]))