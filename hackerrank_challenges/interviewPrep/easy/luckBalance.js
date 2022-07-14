function luckBalance(k, contests) {
    // Write your code here
    let quantityImportant = 0;
    let importantLuck = []
    let luck = 0;
    for (let i = 0; i < contests.length; i++) {
        if (contests[i][1] === 1) {
            quantityImportant++
            importantLuck.push(contests[i][0])
        }
        luck += contests[i][0]
    }

    if (quantityImportant < k) return luck
    importantLuck.sort((a,b)=>a-b);
    const debtLuckImportant = quantityImportant - k;
    for (let j = 0; j < (debtLuckImportant); j++) {
        luck -= (importantLuck[j] * 2)
    }
    return luck
}

const plays = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]
console.log(luckBalance(3, plays))