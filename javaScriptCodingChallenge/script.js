/* Write a function called addNumbers that takes two numbers as argumnets and returns their sum.Call the function before it is declared to demostrate hoisting*/

// function addNumbers(num1,num2) {
//     let sum=num1+num2;
//     return sum;
// }
// console.log(addNumbers(10,20));//30

// /* Write a function called multiplynumbers that takes two numbers as arguments and returns their product use function expressions to define the function and call the function before it is declared to demonstrate hoisting */

// function multiplyNumbers(num1,num2) {
//     let mul=num1*num2;
//     return mul;
// }
// console.log(multiplyNumbers(10,20))//200

// /* write a function that takes two numbers as arguments and returns thier sum. Declare a variable inside the function using the var keyword and log its value to the console before it is assigned a value to demonstrate variable hoisting.*/
// function sum(num1,num2) {
//     console.log(sum);
//     var sum=num1+num2;
//     return sum;
// }
// console.log(sum(10,20));



// /*Declare three variables one using let one using var and one using const all inside a block scope. Assign them values and log their values to the console before and ofther they are declared to demonstrate variable hoisting */

// function demonstrateHoisting() {
//     {
//         // Trying to log the values before declaration
//         try {
//             console.log(varVariable); // Output: undefined (due to hoisting)
//         } catch (error) {
//             console.error("varVariable error:", error.message); // Won't be executed
//         }

//         try {
//             console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
//         } catch (error) {
//             console.error("letVariable error:", error.message); // This will be executed
//         }

//         try {
//             console.log(constVariable); // ReferenceError: Cannot access 'constVariable' before initialization
//         } catch (error) {
//             console.error("constVariable error:", error.message); // This will be executed
//         }

//         // Variable declarations
//         var varVariable = "I am var";
//         let letVariable = "I am let";
//         const constVariable = "I am const";

//         // Logging the values after declaration
//         console.log(varVariable); // Output: I am var
//         console.log(letVariable); // Output: I am let
//         console.log(constVariable); // Output: I am const
//     }
// }

// // Call the function to see the results
// demonstrateHoisting();



/*Declare a variable let insice a block scope and attempt to log its value to the console before it is assigned a value to demonstrate the temporal dead zone */
// function demonstrateTemporalDeadZone() {
//     {
//         // Attempting to log the value before the variable is declared and assigned
//         try {
//             console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
//         } catch (error) {
//             console.error("letVariable error:", error.message); // This will be executed
//         }

//         // Variable declaration and assignment
//         let letVariable = "I am topper girl";

//         // Logging the value after the variable is declared and assigned
//         console.log(letVariable); // Output: I am in the temporal dead zone
//     }
// }

// // Call the function to see the results
// demonstrateTemporalDeadZone();


/* 
Write a function that takes an object representing a person as input, and extracts the name and street
properties from a nested object using object destructuring. The function should return an object with these two
properties. A sample object is given below.
const person = {
    name: "Topper Girl",
     age: 30,
    address: {
        street: "123 Main St",
        city: "motihar",
        country: "Bihar"
    },
   
    occupation: "frontend  Developer"
};

*/
// function extractNameAndStreet(person) {
//     // Destructure the name and street properties from the person object
//     const { name, address: { street } } = person;

//     // Return an object with the extracted properties
//     return { name, street };
// }

// // Example usage
// const person = {
//     name: "Topper Girl",
//     age: 30,
//     address: {
//         street: "123 Main St",
//         city: "Motihari",
//         country: "Bihar"
//     },
   
//     occupation: "Frontend Developer"
// };

// const result = extractNameAndStreet(person);
// console.log(result); // { name: "John Doe", street: "123 Main St" }

// Function to get input from the user and maximize the array value

