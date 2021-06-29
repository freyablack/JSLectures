let list = ['orange', 'banana', 'oreos'];

console.log(list[1])

let students = ["Tony", "Marshal", "Rhys", "Ray", 23, true, ["Ryan", "Will", "Amira"]];

//console.log(typeof students);
//console.log(students instanceof Array);

//console.log(students[2])
//console.log(students[0])

/*
Challenge
************
! -dive ito nested array and pull the value 'Will
! -print out "Hello Will!"
*/

//console.log(students[6][1])
//console.log(`Hello ${students[6][1]}!`)




// for (foodItem of food) {
//     console.log(foodItem)
// }

food.push('Pizza'); // * Appends 'Pizza' to end of array
console.log('push:', food);

food.splice(1, 1, 'Bananas'); // * Removes shrimp, adds bananas (position, how many to remove, what to add)
console.log('splice:', food);

food.splice(2, 0, 'Sweet Potato Pie'); // * Adds Sweet Potato Pie in position 2, but doesn't remove anything
console.log('splice2:', food)

food.pop(); // * Removes the last thing in the array
console.log('pop:', food)

food.shift(); // * Removes the first thing in the array
console.log('shift:', food);

food.unshift('Popcorn', 'Steak'); // * unshift adds one or more elements to the beginning of the array
console.log('unshift:', food)

let colors = ['red', 'orange', 'yellow', 'green', 'blue'];

// for (let i = 0; i < colors.length; i++) {
//     console.log(colors[i])
// }

//colors.forEach(color => console.log(color));

colors.forEach((color, index) => {
    console.log(color);
    console.log(index);
})

/* Challenge
! - (Go look at MDN docs to remind you)
! - Create an array containing movies
! - Use .forEach() to list your movies
! - Add another movie at the end
! - And replace one of your existing movies with another one
*/





let movies = ['28 Days Later', 'Sunshine', "Howl's Moving Castle", 'Pulp Fiction']

movies.push('Braveheart');
movies.splice(0, 1, '28 Weeks Later')

movies.forEach((movie) => console.log(movie))

/* Challenge
! - First, check if you are working with an array
! - Using a method, flip the values within the array (what was in index 4 is now 0, 3 to 1, etc.)
! - Using a method, print the values of the newly arranged array
*/

let arr = [1, 2, 3, 4, 5];
// console.log(arr instanceof Array);
// arr.reverse();
// arr.forEach((arr) => console.log(arr));

if (arr instanceof Array) {
    let revArr = arr.reverse()
    revArr.forEach((num) => console.log(num))
} else {
    console.log(`Not an array`)
}





