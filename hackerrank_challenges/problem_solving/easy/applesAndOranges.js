
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    // Write your code here
    var countApples = 0
    var countOranges = 0
    apples.forEach(apple => {
        if ((apple + a) >= s && (apple + a) <= t) {
            countApples++
        }
    });
    console.log(countApples)
    oranges.forEach(orange => {
        if ((orange + b) >= s && (orange + b) <= t) countOranges++
    });
    console.log(countOranges)
}

// Explanation with diagram:

// https://www.hackerrank.com/challenges/apple-and-orange/problem