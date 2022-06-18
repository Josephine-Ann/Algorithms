function countingInversions(arr) {
        let allGood = 0;
        let i = 0
        let first;
        let second;
        let count = 0;
        while (allGood !== (arr.length - 1)) {
            first = arr[i]
            second = arr[i + 1]
            if (first > second) {
                arr[i] = second
                arr[i + 1] = first
                count++
            } else {
                allGood++
            }
            if (i !== (arr.length - 1)) {
                i++
            } else {
                i = 0
                allGood = 0
            }
        }
        return count
    }

    const firstTest = [1, 1, 1, 2, 2]
    const secondTest = [2, 1, 3, 1, 2]
    const thirdTest = [1, 5, 3, 7]


    console.log(countingInversions(firstTest) === 0)
    console.log(countingInversions(secondTest) === 4)
    console.log(countingInversions(thirdTest) === 1)

   
    