// Write your code here
function happyLadybugs(b) {
    b = b.split("")
    var frequencyCounter = {}
    var happy = true
    b.forEach((element, index) => {
        !frequencyCounter[element] ? frequencyCounter[element] = 1 : frequencyCounter[element]++
        if ((b[index - 1] !== element) && (b[index + 1] !== element)) happy = false
    });
    if (happy) return "YES"
    if (!b.includes("_")) return "NO"
    for (const property in frequencyCounter) {
        if (property !== "_" && frequencyCounter[property] < 2) return "NO"
    }
    return "YES"
}

console.log(happyLadybugs("B_RRBR"))