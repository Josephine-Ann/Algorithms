function maxMin(k, arr) {
    arr.sort((a,b)=>a-b);
    let unfairness;
    let copy = []
    let i = 0
    for (i; i < (k); i++) {
      copy.push(arr[i])
    }
    unfairness = Math.max(...copy) - Math.min(...copy)
    for (i; i < arr.length; i++) {
      copy.shift()
      copy.push(arr[i])
      unfairness = Math.min(unfairness, (Math.max(...copy) - Math.min(...copy)))
    }
    return unfairness
}


console.log(maxMin(3,[
    10,
    100,
    300,
    200,
    1000,
    20,
    30,
 ]))
//  console.log(maxMin(2,
//     [ 1, 2, 3, 2, 1 ]))
//     console.log(maxMin(4,[
//            1,  2,  3,   4,  10,
//           20, 30, 40, 100, 200
//         ]))

// let nums = [1,3,4,5,6,7]
// console.log(Math.max(...nums))
// console.log(Math.min(...nums))

