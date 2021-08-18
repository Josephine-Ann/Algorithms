function viralAdvertising(n) {
    let allLikes = 0
    let currentPeople = 5
    let likes;
    for (let i = 0; i < n; i++) {
        likes = Math.floor(currentPeople / 2)
        allLikes += likes
        currentPeople = likes * 3
    }
    return allLikes
}

console.log(viralAdvertising(5))

// explanation
// https://www.hackerrank.com/challenges/strange-advertising/problem