function minimumNumber(n, password) {
    password = password.split('')
    var containsDigit;
    var containsUpperCase;
    var containsLowerCase;
    var containsSpecialChar;
    var totalNeeded = 0
    var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+"]
    password.forEach(char => {
        if (specialChar.includes(char)) {
            containsSpecialChar = true
        } else if (!isNaN(char)) {
            containsDigit = true
        } else if (char.toUpperCase() === char) {
            containsUpperCase = true
        } else if (char.toUpperCase() !== char) {
            containsLowerCase = true
        }
    });
    if (!containsDigit) totalNeeded++
    if (!containsUpperCase) totalNeeded++
    if (!containsLowerCase) totalNeeded++
    if (!containsSpecialChar) totalNeeded++
    if ((n + totalNeeded) < 6) {
        return Math.max((6 - n), totalNeeded)
    }
    return totalNeeded
}

// explanation
// https://www.hackerrank.com/challenges/strong-password/problem
