function hourglassSum(arr) {
    arr = [].concat.apply([], arr);
    let sums = []
    let index = 0
    arr.forEach((item) => {
        if (index !== 4 && index !== 5 && index !== 10 && index !== 11 && index !== 16 && index !== 17 && index !== 22 && index !== 23) {
            sums.push(arr[index] + arr[index + 1] + arr[index + 2] + arr[index + 7] + arr[index + 12] + arr[index + 13] + arr[index + 14])
        }
        index++
    })
    sums = sums.slice(0, 16)
    return Math.max(...sums)
}

// explanation

// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays