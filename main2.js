
/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.const prompt = require('prompt-sync')({sigint: true});

// const students = [
//     'Tre',
//     'Sonny',
//     'Crystal',
//     'Ilyas',
//     'Greg',
//     'Fernando',
//     'Timothy',
//     'Patrick',
//     'Steve',
//     'Jimothy',
//     'Pat',
//     'Arnold',
//     'Andy'
//   ];
//   console.log("Challenge 1");

//   for (let i = 0; i < students.length; i++) {
//     console.log(students[i]);
//   }
  
//   console.log();



//   console.log("Challenge 2")
// // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
// const grades = [100, 80, 110, 75, 83, 64];
// const reverseGrades = grades.reverse();

// for (let i = 0; i < reverseGrades.length; i++) {
//     console.log(reverseGrades[i]);
//   }

//   console.log();
  
// // challege 3
// // Console.log out only the even numbers in the following array.
//   console.log("Challenge 3")
  
// // Console.log out only the even numbers in the following array.
// const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];


// for (let i = 0; i < positiveNumbers.length; i++) {
//     if (positiveNumbers[i] % 2 ===0) 
//     console.log(positiveNumbers[i]);

//   }
//   console.log();
  
// // challege 4

//   console.log("Challenge 4")

//   // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
// const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

// for (let i = 0; i < mixedSignNumbers.length; i++) {
//     if (mixedSignNumbers[i] % 2 ===0) 
//     console.log(mixedSignNumbers[i]);

//   }

//   console.log();
  
// // challege 5

//   console.log("Challenge 5")
//   // Challenge 5
// // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.

// const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];

// symmetricalCapitals.pop()
// const spliceStartIndex =0;    // the beginning of the array 
// const numItemsToRemove = 2;  //this will remove the last two items

// symmetricalCapitals.splice(spliceStartIndex, numItemsToRemove);

// for (let i = 0; i < symmetricalCapitals.length; i++) {
    
//     console.log(symmetricalCapitals[i]);

//   }

//   console.log();
  
// // challege 6

//   console.log("Challenge 6")
//   // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
// const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13,];
// fibonacciNumbers.push(21,34);
// fibonacciNumbers.unshift(0);

// for (let i = 0; i < fibonacciNumbers.length; i++) {
    
//     console.log(fibonacciNumbers[i]);

//   }

//   console.log();



  
// // challege 7

//   console.log("Challenge 7")

//   // Challenge 7
// // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.

// const pcComponent = ["cpu", "ssd", "gpu", "case", "ram"]

// for (let i = 0; i < pcComponent.length; i++) {
    
//     console.log(pcComponent[i]);

//   }
//   console.log();
//   // challege 8
  
//     console.log("Challenge 8")

//   // Challenge 8
// // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
// const empty =[]

// empty.unshift("hey", "hello", "hi");
// empty.push ("hola", "Ciao")

// for (let i =0; i < empty.length; i++) {
//     console.log(empty[i]); 
// }
// console.log();
// // challege 9

//   console.log("Challenge 9")

// // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
// const student = [
//     'Tre',
//     'Sonny',
//     'Crystal',
//     'Ilyas',
//     'Greg',
//     'Fernando',
//     'Timothy',
//     'Patrick',
//     'Steve',
//     'Jimothy',
//     'Pat',
//     'Arnold',
//     'Andy'
//   ];

//   for (let i =3; i < 11; i++) {

//     console.log(students[i]);}


// console.log ()

// console.log("Challenge 10")
//     // Challenge 10
// // Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.   

// let studentsCopy = [];

// for (let i = 3; i < + student.length ; i++) {
//   console.log(student[i]);
// }

// for (const student of studentsCopy) {
//   console.log(student);
// }

// console.log();



// console.log("Challenge 11")
// // Challenge 11
// // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.  

// const studentsCopy2 = student.slice(3, 11);

// for (const student of studentsCopy2) {
//   console.log(student);

// }

// console.log();



// console.log("Challenge 12")
// // Challenge 12
// // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

dinosaurs.splice(4, 3);
for (let i = 0; i < + dinosaurs.length; i++) {
    console.log(dinosaurs[i]);
  }
console.log()
console.log("challenge 13")
// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.


    console.log(dinosaurs.join("*"));
console.log();

console.log("Challenge 14")
    // Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.

dinosaurs.reverse ();
for (let i = 0; i < + dinosaurs.length; i++) {
    console.log(dinosaurs[i]);
  }


console.log();

console.log("Challenge 15")
// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];

const third = primaries.concat(secondaries);

for (let i = 0; i < third.length; i++) {

  console.log(third[i]);
  
}
 console.log ();
for (let i = 0; i < primaries.length; i++) {

  console.log(primaries[i]);
  console.log(secondaries[i]);
  
}