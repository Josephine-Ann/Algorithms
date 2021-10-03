function dayOnePartOne(expenses = [], target = 2020) {
    return expenses.reduce((result, expense) => {
        const remainder = target - expense;
        if (expenses.includes(remainder)) {
            return expense * remainder
        }
        return result;
    })
}

function dayPartTwo(expenses = [], target = 2020) {
    return expenses.reduce((result, currentExpense, index, src) => {
        for (const nextExpense of src) {
            const remainder = target - currentExpense - nextExpense
            if (src.includes(remainder)) {
                return remainder * currentExpense * nextExpense;
            }
        }
        return result
    })
}