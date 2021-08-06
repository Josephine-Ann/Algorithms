function staircase(n) {
    // Write your code here
    function multAdd(num, char) {
        var substring = ""
        while (num > 0) {
            substring = substring.concat(char)
            num--
        }
        return substring
    }
    var arrs = []
    for (let i = 0; i < n; i++) {
        arrs[n - i - 1] = (multAdd(i, " ").concat(multAdd((n - i), "#")))
    }
    for (let i = 0; i < n; i++) {
        console.log(arrs[i])
    }
    return arrs
}

// Staircase detail

// This is a staircase of size :

//    #
//   ##
//  ###
// ####

// Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the staircase function in the editor below.

// staircase has the following parameter(s):

// int n: an integer
// Print

// Print a staircase as described above.


// Output Format

// Print a staircase of size  using # symbols and spaces.

// Note: The last line must have  spaces in it.

// Sample Input

// 6 
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######
