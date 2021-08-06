function fibonacci(n) {
    let indexIntegers = 2
    let indexFibonacci = 3
    let indexAddition = [1, 1]
    while (indexFibonacci <= n) {
        indexIntegers = 0
        indexIntegers += (indexAddition[0] + indexAddition[1])
        indexAddition[1] = indexAddition[0]
        indexAddition[0] = indexIntegers
        indexFibonacci++
    }
    return indexIntegers
}

// explanation
// https://www.hackerrank.com/challenges/ctci-fibonacci-numbers/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=recursion-backtracking