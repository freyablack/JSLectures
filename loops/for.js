// For Loop
/*
    A way to perform mundane, repeatable task quickly. 
    Loops iterate (go over) an iterable (something that can be gone over, 
    such as counting from 0-100)

    ! for (start paramater, stop paramater, step paramater) {
    ! code applied to each step of the iteration
    ! }
*/

// *for (i = 0; i <= 100; i++) {
// *    // let i = 0 is not needed; can use i = 0
// *    // i++ is the same as i = i + 1
// *    console.log(i)
// *}

// FizzBuzz
/*for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else if (i % 3 && 5 === 0) {
        console.log("FizzBuzz")
    } else {
        console.log(i)
    }
}
*/

let myName = "Freya Black"

console.log(myName.length)
console.log(myName[3])

for(symbols = 0; symbols < myName.length; symbols++) {
    console.log(myName[symbols])
}







