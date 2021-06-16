// While Loops

/*
    While statments create a loop so long as the condition we've specified returns true.

    while (condition) {
        code statement
    }

    To stop a while loop from executing, the condition must at one point return false
*/

let count = 101;

while(count <= 100) {
    console.log(count)
    count += 1
}

while(true) {
    console.log("This is an infinite loop whithout break")
    break
}

// Challenge

// Fizz Buzz + Loops
// Create a loop which will iterate over numbers from 100 - 500.
// For multiples of 3, print "Fizz"
// For multiples of 5, print "Buzz"
// For multiples of 3 and 5, print "Fizz Buzz"
// If it's not a multiple of 3 and 5, print the number itself.
// Utilize standard for loop first



for (i = 100; i <= 500; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("Fizz Buzz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else if (i % 3 == 0) {
        console.log("Fizz")
    } else {
        console.log(i)
    }
}


