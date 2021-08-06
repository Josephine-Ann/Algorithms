function whatFlavors(cost, money) {
    let finalPair = []
    let pairs = {}
    cost.forEach(element => {
        if (!pairs[element]) {
            pairs[element] = [money - element, 1]
        } else {
            pairs[element][1]++
        }
    });
    let index = 1
    let key;
    let value;
    for (let i = 0; i < cost.length; i++) {
        key = cost[i]
        cost[i]
        value = pairs[key][0]
        if (pairs[value] && key !== value) {
            finalPair.push(index)
        } else if (pairs[value] && pairs[value][1] > 1) {
            finalPair.push(index)
        }
        index++
    }
    console.log(finalPair.join(' '))
}

// explanation

// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=search

