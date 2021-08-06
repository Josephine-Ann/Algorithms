function miniMaxSum(arr) {
    var max = arr[0]
    var min = arr[0]
    var minTotal = 0
    var maxTotal = 0
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > max) max = arr[i]
        if (arr[i] < min) min = arr[i]
        minTotal += arr[i]
        maxTotal += arr[i]
    }
    if (arr[arr.length - 1] < max) {
        minTotal -= max
        minTotal += arr[arr.length - 1]
    }
    if (arr[arr.length - 1] > min) {
        maxTotal -= min
        maxTotal += arr[arr.length - 1]
    }
    console.log(minTotal, maxTotal)
}

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.Then print the respective minimum and maximum values as a single line of two space - separated long integers.

// Input Format

// A single line of five space-separated integers.

// utput Format

// Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

// Sample Input

// 1 2 3 4 5

// Sample Output

// 10 14
