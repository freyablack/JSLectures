//* Scope & Hoisting

/*
    Scope determines how different blocks of code can be accessed.
    Three types of scope:
        - Global (everything inside the main document)
        - Block or Local
        - Function ()
*/

//* Global Scope
/*
    Our JS file, or window object in terms of browser
    Accessible from every other scope
*/
let x;
console.log(x)
function addOne() {
    x = 1
}
addOne()
console.log(x)

//* Function scope
//! Can be accessed inside the function ONLY.
function carName() {
    let name = "Maserati"
    var model = "GranTurismo"
    if (true){
        // let will not allow you to console.log
        // it is scoped to the enclosing function
        // let year = 2013
        var year = 2013
        // var will let you console.log
        // scoped to enclosing function
    } 
    console.log(year)
    //console.log(name)
}
carName()
//console.log(name)

//* Let/Const vs Var
/*
    !Let is scoped to the immediate enclosing block of code. Let is NOT hoisted
    !Var is hoised and scoped to the immediate function block
*/

{
    // let blockScopeVariable = "Block scope"
    // This ^^ causes a reference error because it is scoped to the block
    var functionScopeVariable = "Function Scope Var(iable)" 
}

// In this instance function scope == global scope
//console.log(function0ScopeVariable)

console.log("----End of Function Scope------")
console.log("------Start Hoisting------")

//* Hoisting
/*
    JS is an interpreted languate that is being read top to bottom
    and left to right. The parser which reads the code goes over it twice.
    First, to hoist or assign memory location to ALL VAR(iable)
    declarations as well as Function Declarations.
    During the second pass, the interpreter actually reads the initilization values
    and expressions that we have assigned, and executed our code.
*/

let y;
console.log(y)
// 1. y gets declared and assigned a value of undefined
// 2. console log reads the undefined value

//! Code below results in an error because let does not get hoisted
//console.log(z)
//let z;

console.log(a)
var a;

// First console.log returns undefined because cheese is hoisted (but not the value)
console.log(cheese)
var cheese = "Gouda";
// Second console.log returns "Gouda" because hoisted declaration has been reassigned the value of line 84.
console.log(cheese)

// Hoisting & Function Declaration vs Function Expression

//! This is a function declaration
//! Invoking the function before creation will work because function declaration is hoisted.
helloWorld()
function helloWorld() {
    console.log("Hello World from the hoisting side! - Adele")
}
//! This is a function invocation
// helloWorld()

// addNums(5, 5)
// ^^ Will not work because function expressions are NOT hoisted.
let addNums = function(x, y){
    console.log(x + y)
}
// Works (returns 10) because function expression is created, then invoked
addNums(5, 5)

// Arrow functions are derivatives of function expressions are also NOT hoisted

// Extra credit showing where to use function expression vs function declaration
let arr = ["Paul", "Jessica", "Marshall", "Alex", "Foluso", "Dakota"]

arr.map(value => console.log(value))
// ^ More efficient and more elegant

arr.map(function(value) {console.log(value)})
// ^ Less efficient and not as elegant






