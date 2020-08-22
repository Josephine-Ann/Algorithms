// O(n)


function addUpToMoreIntuitive(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

// the operations will depend on what n is. If
// it's 5, you will have 5 operations TO START (there are loads)
// as n grows, the numbers of operations will grow in 
// proportion to n


// O(n)

console.log(addUpToMoreIntuitive(6))

function addUpToQuicker(n) {
    return n * (n + 1) / 2;
}

// regardless of what n is, addUpToQuicker will have the 
// same number of operations

// what's better:
// usually speed and memory-intensivity
// readability is also often important to many people, but
// speed &  memory-intensitivity often come at the cost 
// of reabability

// var t1 = performance.now();
// addUpToMoreIntuitive(1000000)
// let t2 = performance.now();
// console.log(t2 - t1)

// var to1 = performance.now();
// addUpToQuicker(1000000)
// let to2 = performance.now();
// console.log(t2 - t1)

// machines record different times almost every time

function countUpAndDown(n) {
    console.log("Going up");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}

countUpAndDown(5)

// o(n²)

function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// Loop and nested loop 

// O(3n) = O(n)
// O(500) = O(1)
// O(13n²) = O(n²)
// O(n + 10) = O(n)
// O(1000n + 50) = O(n)
// O(n² + 5n + 8) = O(n²)

//Big 0 Shorthands

// 1. Arithmetic operations are constant
// 2. Variable assignment is constant
// 3. Accessing elements in an array (by index) or object 
// (by key) is constant
// 4. In a loop, the complexity is the length of the loop 
// times the complexity of whatever happens inside of the loop.

// O(n)

function logAtLeast5(n) {
    for (var i = 1; i < Math.max(5, n); i++) {
        console.log(i);
    }
}

// O(1)

function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

// most primitives (booleans, numbers, undefined, null) are
// constant space

// strings require O(n) space (where n is the string length)

// reference types are generally O(n), where n is the 
// length (for arrays) or the number of keys (for objects)

//O(1) space
// i is the only thing to consider

function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

//O(n)

function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

function subtotals(array) {
    var subtotalArray = Array(array.length);
    for (var i = 0; i < array.length; i++) {
        var subtotal = 0;
        for (var j = 0; j <= i; j++) {
            subtotal += array[j];
        }
        subtotalArray[i] = subtotal;
    }
    return subtotalArray;
}

console.log(subtotals([2, 3, 4, 5, 6]))

// log2(8) = 3, 2³ = 8

// the logarithm of a number: 
// the number of times you have to divide it 
// by 2 before it's 1 

// recap
// 1. To analyse the performace 
//of an algorithm, we use big O notation.

// 2. big O notation can give us a high level 
// understanding of the time or space complexity 
// of an algorithm

// 3. Big O notation doesn't care about precision, 
// only about general trends (linear? quadratic? constant?)

// 4. The time or space complexity (as measured by big O)
// depends only on the algorithm, not the hardware used 
// to run the algorithm

