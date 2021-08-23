function dayOfProgrammer(year) {
    if (year === 1918) {
        return "26.09.1918"
    } else if ((((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) && year > 1918) || (year % 4 === 0 && year <= 1919)) {
        return "12.09." + year.toString()
    } else if (((year % 4 !== 0 || year % 100 === 0) && year > 1918) || (year % 4 !== 0 && year <= 1919)) {
        return "13.09." + year.toString()
    }
}

// explanation
// https://www.hackerrank.com/challenges/day-of-the-programmer/problem