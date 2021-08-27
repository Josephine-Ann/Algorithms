// function jumpingOnClouds(c, k) {
//     var energy = 100
//     c[0] === 1 ? energy -= 3 : energy -= 1
//     for (var i = k; i < c.length; i += k) {
//         c[i] === 1 ? energy -= 3 : energy--
//         if ((i + k) > c.length) {
//             i = i + k - c.length
//             c[i] === 1 ? energy -= 3 : energy--
//         } else if ((i + k) === c.length) {
//             i === 0
//         }
//     }
//     return energy
// }

// // console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2))
// console.log(jumpingOnClouds([1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3))

// // explanation
// // https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    // return maxSum;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))

function maxSubarraySumNaive(arr, num) {
    var counter = 0
    if (num > arr.length) {
        return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            counter++
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
    }
    console.log(counter)
    // return max;
}

console.log(maxSubarraySumNaive([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))

