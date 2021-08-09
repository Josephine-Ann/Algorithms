function bonAppetit(bill, k, b) {
    var total = 0
    for (let i = 0; i < (bill.length); i++) {
        if (i !== k) total += (bill[i] / 2)
    }
    b - total === 0 ? console.log("Bon Appetit") : console.log(b - total)
}

// console.log(bonAppetit([3, 10, 2, 9], 1, 12))

// explanation
// https://www.hackerrank.com/challenges/bon-appetit/problem