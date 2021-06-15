// Operators

/*
    Assignment, Arithmetic & Comparison
        - Assignment assigns value to a declaration
            - denoted by =
        -Arithmetic operators perform simple math
            - Additon +
            - Subtraction -
            - Multiplication *
            - Division /
            - Exponent **
            - Modulus %
            - Math. objects to help with other operations
        - Comparison operators compare values
            - Equality and Strict Equality == & ===
            - Inequality and Strict Inequality != !==
            - Greater than or Less than > <
            - Greater or equal than or Less or equal than >= <=
            - AND && and OR ||
*/

let age = 25;

// Modulus - provides remainder of Euclidean division.

console.log(25 % 5)

// Math Object - allows access to more advanced mathematical computations

console.log(Math.max(5, 2, 17, 22, 97))

// Equality vs Strict Equality
/*
    Equality & Strict Equality Operators
        - Return truthy or falsey value depending on a given condition
        - Equality performs type coercion on one of the values it's being
        compared to. For ex: 5 == "5" converts the string to an interger.
        - Strict equality checks if the value and its type are the same.
*/

console.log(5 == 5) // returns true

console.log(5 === 5) // returns true

console.log(5 == '5') // returns true because of type coercion

console.log(5 === "5") // returns false because we're checking for value & value type

let x = 5;
let y = "5";

console.log(typeof x, typeof y) // same value, different data type

// Inequality and Strict Inequality

console.log('--------------')
console.log(5 != 7) // returns true (5 is not equal to 7)

console.log(5 != 5) // returns false (both values are the same)

console.log(5 != '5') // returns false (type coercion makes str(5) an int(5))

console.log(5 !== '5') // returns true (different data types)


// AND || Comparison
// Returns true if two values are the same
console.log(true && true)
//Retuns false if either of the value is not the same
console.log(true && false)

// OR || Comparison
// Returns true if either of the values are true.
console.log(true || false)
console.log(true || true)
console.log(false || false)

// Strict Inequality & Booleans !=
// Flips resulting boolean
let flippedBool = !true
console.log(flippedBool)

console.log('--------------')


// Extra Credit How to get date in JavaScript

let date = new Date
let year = date.getFullYear()
let month = date.getMonth()
month += 1 // month = month + 1 OR month = 5 + 1
let day = date.getDay()

console.log(`Today is ${day}nd day of ${month} of ${year}`)

// Gives you Day, (Date) (Month) (Year)
console.log(date.toDateString())

// Gives you Day, (Date) (Month) (Year) (Hour:Minute:Second) (Timezone)
console.log(date.toUTCString())

// Null vs Undefined vs Not a Number

/*
    Null - empty value; a container or space for somehting to fill it in the future.

    Undefined - default value of a declaration. Does not act as an empty container.

    Not a Number (NaN) - Determines if a value is not a number.
*/

console.log(isNaN(123)) // returns false because it is a number.
console.log(isNaN(0/0)) // returns true because you can't divide 0 by 0, gives you no number.
console.log(isNaN(NaN)) // returns true because NaN is Not a Number.
console.log(isNaN(Math.sqrt(-1))) // returns true because imaginary (i) number is NaN

function passDate() {
    let date = new Date
    return date.toDateString()
}

console.log(passDate())

// CHALLENGE 
/*
    Silver
    Create three variables: name (str), age (int), and a city and state
    where you live (str). Use template literal to console log it.

    Gold
    Create a new variable called result which holds a concatenated version of
    your prior variables. Find a method that will console log the length of that new variable.

    Platinum
    Utilize a method that will make all of your text capitalized 
    and check if you live in Indianapolis, IN

*/

let name = 'Freya'
let myAge = 29
let live = "Fort Wayne, Indiana"

console.log(`My name is ${name}, I'm ${myAge} and I live in ${live}.`)

// let concat_full = name.concat(` `, `Is my name, I'm ${myAge} and I live in ${live}`)

let concat_full = name + ' ' + myAge + ' ' + live
console.log(concat_full)

let concatFullLength = concat_full.length
console.log(concatFullLength)

let indianapolis = false

console.log(concat_full.includes("Fort Wayne, Indiana"))
console.log(concat_full.toUpperCase(concat_full))
