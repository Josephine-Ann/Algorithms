function getTotalX(a, b) {
    // Write your code here

let counter = 0;
let valid = true;
for (let i = a[a.length-1]; i <= b[0]; i++) {
    for (let j = 0; j < a.length; j++) {
        if (i % a[j] !== 0) valid = false
    }
    for (let x = 0; x < b.length; x++) {
        if (b[x] % i !== 0) valid = false
    }
    valid ? counter++ : valid = true;
}
return counter
// cycle through biggest number in a and smallest number in b
// if the numbers are factors of everything in ab, count it 
}

console.log(getTotalX([2,6], [24,36]))
console.log(getTotalX([2,4], [16, 32, 96]))


