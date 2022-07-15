function closestNumbers(arr) {
    arr.sort((a,b)=>a-b);
    const finalSets = [];
    let min;
    for (let i = 0; i < (arr.length - 1); i++) {
           if (!min || min > (Math.abs(arr[i] - arr[i + 1]))) min =  Math.abs(arr[i] - arr[i + 1])
    }
    for (let i = 0; i < (arr.length - 1); i++) {
        if (Math.abs(arr[i] - arr[i + 1]) === min) finalSets.push(arr[i], arr[i+1])
    }
    return finalSets
}
const items = [5, 4, 3, 2]
console.log(closestNumbers(items))

// https://www.hackerrank.com/challenges/closest-numbers/problem?isFullScreen=true