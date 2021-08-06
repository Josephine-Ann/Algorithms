function diagonalDifference(arr) {
    // Write your code here
    var arrRef = 0
    var k = 0
    var counterOne = 0;
    var counterTwo = 0;
    while (k <= (arr[0].length - 1)) {
        counterOne += arr[arrRef][k]
        arrRef++
        k++
        // console.log(counterOne)
    }
    k = 0
    arrRef = arr.length - 1
    while (k <= (arr[0].length - 1)) {
        counterTwo += arr[arrRef][k]
        arrRef--
        k++
    }
    return Math.max(counterOne, counterTwo) - Math.min(counterOne, counterTwo)
}

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9  

// Output Format

// Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x