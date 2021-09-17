// function makeSquare(array1, array2, array3) {
//     var square = {
//         a: array1[0] + array2[0] + array3[0],
//         b: array1[1] + array2[1] + array3[1],
//         c: array1[2] + array2[2] + array3[2],
//         d: array1[0] + array1[1] + array1[2],
//         e: array2[0] + array2[1] + array2[2],
//         f: array1[0] + array2[0] + array3[0],
//         dArray: array1,
//         eArray: array2,
//         fArray: array3,
//         g: array1[0] + array2[1] + array3[2],
//         h: array1[2] + array2[1] + array3[0]
//     }
//     return square
// }

// function updateSquare(array, index, newValue, square) {
//     var array1 = square["dArray"]
//     var array2 = square["eArray"]
//     var array3 = square["fArray"]
//     if (array === 1 && index === 0) {
//         square["a"] = newValue + array2[0] + array3[0]
//         square["d"] = newValue + array1[1] + array1[2]
//         square["g"] = newValue + array2[1] + array3[2]
//         square["dArray"] = [newValue, array1[1], array1[2]]
//     } else if (array === 1 && index === 1) {
//         square["b"] = newValue + array2[1] + array3[1]
//         square["d"] = array1[0] + newValue + array1[2]
//         square["dArray"] = [array1[0], newValue, array1[2]]
//     } else if (array === 1 && index === 2) {
//         square["c"] = newValue + array2[2] + array3[2]
//         square["d"] = array1[0] + array1[1] + newValue
//         square["dArray"] = [array1[0], array1[1], newValue]
//         square["h"] = newValue + array2[1] + array3[0]
//     } else if (array === 2 && index === 0) {
//         square["a"] = array1[0] + newValue + array3[0]
//         square["e"] = newValue + array2[1] + array2[2]
//         square["eArray"] = [newValue, array2[1], array2[2]]
//     } else if (array === 2 && index === 1) {
//         sqaure["b"] = array1[1] + newValue + array3[1]
//         square["e"] = array2[0] + newValue + array2[2]
//         square["g"] = array1[0] + newValue + array3[2]
//         square["h"] = array1[2] + newValue + array3[0]
//         square["eArray"] = [array2[0], newValue, array2[2]]
//     } else if (array === 2 && index === 2) {
//         square["c"] = array1[2] + newValue + array3[2]
//         square["e"] = array2[0] + array2[1] + newValue
//         square["eArray"] = [array2[0], array2[1], newValue]
//     } else if (array === 3 && index === 0) {
//         square["a"] = array1[0] + array2[0] + newValue
//         square["f"] = newValue + array3[1] + array3[2]
//         square["h"] = array1[2] + array2[1] + newValue
//         square["fArray"] = [newValue, array3[1], array3[2]]
//     } else if (array === 3 && index === 1) {
//         square["b"] = array1[1] + array2[1] + newValue
//         square["f"] = array3[0] + newValue + array3[2]
//         square["fArray"] = [array3[0], newValue, array3[2]]
//     } else if (array === 3 && index === 2) {
//         square["c"] = array1[2] + array2[2] + newValue
//         square["g"] = array1[0] + array2[1] + newValue
//         square["f"] = array3[0] + array3[1] + newValue
//         square[fArray] = [array3[0], array3[1], newValue]
//     }
//     return square
// }

// function differences(square) {
//     var h = square["h"]
//     var g = square["g"]
//     var differences = {
//         h1: {
//             a: Math.abs(h - square["a"]),
//             b: Math.abs(h - square["b"]),
//             c: Math.abs(h - square["c"])
//         },
//         h2: {
//             d: Math.abs(h - square["d"]),
//             e: Math.abs(h - square["e"]),
//             f: Math.abs(h - square["f"]),
//         },
//         g1: {
//             a: Math.abs(g - square["a"]),
//             b: Math.abs(g - square["b"]),
//             c: Math.abs(g - square["c"]),
//         },
//         g2: {
//             d: Math.abs(g - square["d"]),
//             e: Math.abs(g - square["e"]),
//             f: Math.abs(g - square["f"]),
//         }
//     }
//     return differences
// }

// function choicesOfDifferences(differences) {
//     var usedH = []
//     var pairsH = []
//     var usedG = []
//     var pairsG = []
//     for (const difference in differences["h1"]) {
//         for (const otherDiff in differences["h2"]) {
//             if (differences["h1"][difference] === differences["h2"][otherDiff] && !usedH.includes(otherDiff) && !usedH.includes(difference)) {
//                 usedH.push(difference, otherDiff)
//                 pairsH.push([otherDiff, difference])
//             }
//         }
//     }
//     for (const difference in differences["g1"]) {
//         for (const otherDiff in differences["g2"]) {
//             if (differences["g1"][difference] === differences["g2"][otherDiff] && !usedG.includes(otherDiff) && !usedG.includes(difference)) {
//                 usedG.push(difference, otherDiff)
//                 pairsG.push([otherDiff, difference])
//             }
//         }
//     }
//     var pairs = { pairsH, pairsG }
//     return pairs
// }

// function getCoordinates(choices) {
//     var choicesAsNumbers = []
//     for (const setOfPairs in choices) {
//         choices[setOfPairs].forEach(element => {
//             choicesAsNumbers.push([])
//             element.forEach(letter => {
//                 if (letter === "a") {
//                     choicesAsNumbers[choicesAsNumbers.length - 1].push(0)
//                 } else if (letter === "b") {
//                     choicesAsNumbers[choicesAsNumbers.length - 1].push(1)
//                 } else if (letter === "c") {
//                     choicesAsNumbers[choicesAsNumbers.length - 1].push(2)
//                 } else if (letter === "d") {
//                     choicesAsNumbers[choicesAsNumbers.length - 1].push(1)
//                 } else if (letter === "e") {
//                     choicesAsNumbers[choicesAsNumbers.length - 1].push(2)
//                 } else if (letter === "f") {
//                     choicesAsNumbers[choicesAsNumbers.length - 1].push(3)
//                 }
//             });
//         });
//     }

//     return choicesAsNumbers
// }

// function formingMagicSquare(s1, s2, s3) {
//     var square = makeSquare(s1, s2, s3)
//     var diff = differences(square)
//     var choices = choicesOfDifferences(diff)
//     var getCoordinates = getCoordinates(choices)
//     var updateSquareH = square
//     // for (let i = 0; i < 3; i++) {
//     //     updateSquareH = updateSquare(getCoordinates[i][0], getCoordinates[i][1], newValue, square)
//     // }
//     return choices
// }

// console.log(formingMagicSquare([5, 3, 4], [1, 5, 8], [6, 4, 2]))


function formingMagicSquare(s1, s2, s3) {
    function updateSquare(array, index, newValue, square) {
        var array1 = square["dArray"]
        var array2 = square["eArray"]
        var array3 = square["fArray"]
        if (array === 1 && index === 0) {
            square["a"] = newValue + array2[0] + array3[0]
            square["d"] = newValue + array1[1] + array1[2]
            square["g"] = newValue + array2[1] + array3[2]
            square["dArray"] = [newValue, array1[1], array1[2]]
        } else if (array === 1 && index === 1) {
            square["b"] = newValue + array2[1] + array3[1]
            square["d"] = array1[0] + newValue + array1[2]
            square["dArray"] = [array1[0], newValue, array1[2]]
        } else if (array === 1 && index === 2) {
            square["c"] = newValue + array2[2] + array3[2]
            square["d"] = array1[0] + array1[1] + newValue
            square["dArray"] = [array1[0], array1[1], newValue]
            square["h"] = newValue + array2[1] + array3[0]
        } else if (array === 2 && index === 0) {
            square["a"] = array1[0] + newValue + array3[0]
            square["e"] = newValue + array2[1] + array2[2]
            square["eArray"] = [newValue, array2[1], array2[2]]
        } else if (array === 2 && index === 1) {
            sqaure["b"] = array1[1] + newValue + array3[1]
            square["e"] = array2[0] + newValue + array2[2]
            square["g"] = array1[0] + newValue + array3[2]
            square["h"] = array1[2] + newValue + array3[0]
            square["eArray"] = [array2[0], newValue, array2[2]]
        } else if (array === 2 && index === 2) {
            square["c"] = array1[2] + newValue + array3[2]
            square["e"] = array2[0] + array2[1] + newValue
            square["eArray"] = [array2[0], array2[1], newValue]
        } else if (array === 3 && index === 0) {
            square["a"] = array1[0] + array2[0] + newValue
            square["f"] = newValue + array3[1] + array3[2]
            square["h"] = array1[2] + array2[1] + newValue
            square["fArray"] = [newValue, array3[1], array3[2]]
        } else if (array === 3 && index === 1) {
            square["b"] = array1[1] + array2[1] + newValue
            square["f"] = array3[0] + newValue + array3[2]
            square["fArray"] = [array3[0], newValue, array3[2]]
        } else if (array === 3 && index === 2) {
            square["c"] = array1[2] + array2[2] + newValue
            square["g"] = array1[0] + array2[1] + newValue
            square["f"] = array3[0] + array3[1] + newValue
            square[fArray] = [array3[0], array3[1], newValue]
        }
        return square
    }
    function makeSquare(array1, array2, array3) {
        var square = {
            a: array1[0] + array2[0] + array3[0],
            b: array1[1] + array2[1] + array3[1],
            c: array1[2] + array2[2] + array3[2],
            d: array1[0] + array1[1] + array1[2],
            e: array2[0] + array2[1] + array2[2],
            f: array1[0] + array2[0] + array3[0],
            g: array1[0] + array2[1] + array3[2],
            h: array1[2] + array2[1] + array3[0],
            dArray: array1,
            eArray: array2,
            fArray: array3
        }
        return square
    }
    function sumOfParts(square) {
        return (3 * square.dArray[0]) + (2 * square.dArray[1]) + (3 * square.dArray[2]) + (2 * square.eArray[0]) + (4 * square.eArray[1]) + (2 * square.eArray[2]) + (3 * square.fArray[0]) + (2 * square.fArray[1]) + (3 * square.fArray[2])
    }
    function isMagic(square) {
        return (square.a === square.b) && (square.b === square.c) && (square.c === square.d) && (square.d === square.e) && (square.e === square.f) && (square.f === square.g)
    }
    function testOutChanges(square, newValue) {
        var newSquare
        newSquare = square
        var x = 0
        var y = 1
        var j = 2
        var i = 0
        newSquare = updateSquare((i + 1), x, newValue, square)
        newSquare = updateSquare((i + 2), y, newValue, square)
        newSquare = updateSquare((i + 3), j, newValue, square)
        if (isMagic(newSquare)) return newSquare
        newSquare = updateSquare((i + 1), x, newValue, square)
        newSquare = updateSquare((i + 2), j, newValue, square)
        newSquare = updateSquare((i + 3), y, newValue, square)
        if (isMagic(newSquare)) return newSquare
        newSquare = updateSquare((i + 1), y, newValue, square)
        newSquare = updateSquare((i + 2), j, newValue, square)
        newSquare = updateSquare((i + 3), x, newValue, square)
        if (isMagic(newSquare)) return newSquare
        newSquare = updateSquare((i + 1), y, newValue, square)
        newSquare = updateSquare((i + 2), x, newValue, square)
        newSquare = updateSquare((i + 3), j, newValue, square)
        if (isMagic(newSquare)) return newSquare
        newSquare = updateSquare((i + 1), j, newValue, square)
        newSquare = updateSquare((i + 2), x, newValue, square)
        newSquare = updateSquare((i + 3), y, newValue, square)
        if (isMagic(newSquare)) return newSquare
        newSquare = updateSquare((i + 1), j, newValue, square)
        newSquare = updateSquare((i + 2), y, newValue, square)
        newSquare = updateSquare((i + 3), x, newValue, square)
        if (isMagic(newSquare)) return newSquare
    }
    var square = makeSquare(s1, s2, s3)
    return isMagic(square)
}

console.log(formingMagicSquare([5, 3, 4], [1, 5, 8], [6, 4, 2]))
