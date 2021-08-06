function gradingStudents(grades) {
    // Write your code here
    var newGrades = []
    grades.forEach(grade => {
        if (((Math.floor(grade / 5) + 1) * 5) - grade < 3 && grade >= 38) {
            newGrades.push((Math.floor(grade / 5) + 1) * 5)
        } else {
            newGrades.push(grade)
        }
    });
    return newGrades
}

// HackerLand University has the following grading policy:

// Every student receives a grade in the inclusive range from 0 to 100.

// Any  less than 40 is a failing grade.
// Sam is a professor at the university and likes to round each student's grade according to these rules:

// If the difference between the grade and the next multiple of 5 is less than 3, round  up to the next multiple of 5.
// If the value of  is less than 38, no rounding occurs as the result will still be a failing grade.

// Sample Input 0

// 4
// 73
// 67
// 38
// 33
// Sample Output 0

// 75
// 67
// 40
// 33