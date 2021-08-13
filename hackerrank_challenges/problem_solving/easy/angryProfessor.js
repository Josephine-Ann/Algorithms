function angryProfessor(k, a) {
    var studentsAbsent = 0
    a.forEach(student => {
        if (student <= 0) studentsAbsent++
    });
    return studentsAbsent >= k ? "NO" : "YES"
}


console.log(angryProfessor(3, [-1, -3, 4, 2]))
console.log(angryProfessor(2, [0, -1, 2, 1]))

