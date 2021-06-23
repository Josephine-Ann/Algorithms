function mostActive(customers) {
    const totalCount = customers.length
    customers = customers.sort()
    let count = 0
    let arr = []
    customers.forEach((element) => {
        if (customers.indexOf(element) === 0) {
            count++
        } else if (element === customers[customers.indexOf(element) - 1]) {
            count++
        } else if (element !== customers[customers.indexOf(element) - 1]) {
            arr.push(element)
            arr.push(count)
            count = 1
        }
    });
    console.log(arr)
    //how many trades
    // how many times name appears
    // is that number of times 5% of the trades
    // alphabetical order
}

mostActive(20, Omega, Alpha, Omega, Alpha, Omega, Alpha, Omega, Alpha)
