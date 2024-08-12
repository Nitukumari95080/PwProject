/* 
Write a JavaScript program that checks if the entered password matches the confirmed password. If the passwords match, the program should log "Password Matched. Password validation Successful." to the console. Otherwise, it should log "Password didn't match. Password validation unsuccessful" to the console
*/

// Function to check if the entered password matches the confirmed password
// function validatePasswords(enteredPassword, confirmedPassword) {
//     if (enteredPassword === confirmedPassword) {
//         console.log("Password Matched. Password validation Successful.");
//     } else {
//         console.log("Password didn't match. Password validation unsuccessful.");
//     }
// }

// // Example usage:
// const enteredPassword = prompt("Enter your password:");
// const confirmedPassword = prompt("Confirm your password:");

// validatePasswords(enteredPassword, confirmedPassword);


/*
Create a javascript program that takes in two num#ers and a string operator. Make use of a switch statement
to perform the operation on the two num#ersQ
The calculator function should"
L Take in two num#ers, num1 and num2, and a string representing a mathematical operator, operatorP
L Use a switch statement to determine which operation to perform #ased on the value of the operatorP
L If the operator is one of the four valid operators (+, -, *, /), perform the corresponding mathematical
operation and store the result in a varia#le called result
 If the operator is not one of the valid operators, log "Invalid operator" to the console
*/


// function calculator(num1, num2, operator) {
//     let result;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             result = num1 / num2;
//             break;
//         default:
//             console.log("Invalid operator");
//             return;
//     }

//     console.log("The result is: " + result);
// }

// // Example usage:
// const num1 = parseFloat(prompt("Enter the first number:"));
// const num2 = parseFloat(prompt("Enter the second number:"));
// const operator = prompt("Enter the operator (+, -, *, /):");

// calculator(num1, num2, operator);



/* 
Write a JavaScript program that takes in two strings representing colors and uses a switch statement to
determine the resulting color when the two colors are mixed. The program should print the resulting color
#ased on the following criteria"
L If color1 is "red" and color2 is "#lue" or vice versa, print "purple"P
L If color1 is "red" and color2 is "yellow" or vice versa, print "orange"P
L If color1 is "#lue" and `color2" is "yellow" or vice versa, print "green"P
L If any other com#ination of colors is input, the program should print "Invalid color com#ination"
*/

// function mixColors(color1, color2) {
//     let result;

//     switch (true) {
//         case (color1 === "red" && color2 === "blue") || (color1 === "blue" && color2 === "red"):
//             result = "purple";
//             break;
//         case (color1 === "red" && color2 === "yellow") || (color1 === "yellow" && color2 === "red"):
//             result = "orange";
//             break;
//         case (color1 === "blue" && color2 === "yellow") || (color1 === "yellow" && color2 === "blue"):
//             result = "green";
//             break;
//         default:
//             result = "Invalid color combination";
//     }

//     console.log(result);
// }

// // Example usage:
// const color1 = prompt("Enter the first color:").toLowerCase();
// const color2 = prompt("Enter the second color:").toLowerCase();

// mixColors(color1, color2);



/* 
A teacher wants to find out the highest marks scored #y a student in a class of five students. The teacher enters
the marks of all five students in an array called "marks". Write a program that iterates through the array and
finds the highest marks scored #y any student in the class. The highest marks must then #e displayed to the
teacher using the console. Make sure you use the ternary operator to find the student with the highest marks
*/


// let marks = [];

// // Getting marks from the user
// for (let i = 0; i < 5; i++) {
//     let mark = parseInt(prompt(`Enter the marks for student ${i + 1}: `));
//     marks.push(mark);
// }

// // Initialize the highest marks with the first element in the array
// let highestMarks = marks[0];

// // Iterate through the array to find the highest marks
// for (let i = 1; i < marks.length; i++) {
//     highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks;
// }

// // Display the highest marks to the console
// console.log("The highest marks scored by any student in the class are:", highestMarks);


/* 
You are #uilding a form where users can enter their names. You want to make sure that the first letter of the
name is always capitalized, even if the user forgets to do so. Write a program that takes in the user's name as a
string and uses the ternary operator to check if the first letter is lowercase. If it is, the program capitalizes it and
returns the modified string. Otherwise, it returns the original string without any changes
*/


// // Get the user's name
// let name = prompt("Enter your name: ");

// // Function to capitalize the first letter if it is lowercase
// function capitalizeName(name) {
//     return name.charAt(0) === name.charAt(0).toLowerCase() ? 
//            name.charAt(0).toUpperCase() + name.slice(1) : 
//            name;
// }

// // Capitalize the first letter if necessary
// let modifiedName = capitalizeName(name);

// // Display the modified name
// console.log("Modified name:", modifiedName);

/* 
We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate
through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e
counted
*/



// Get the user's name
// let name = prompt("Enter your name: ");

// // Function to count the number of vowels in the name
// function countVowels(name) {
//     let vowelCount = 0;
//     const vowels = 'aeiouAEIOU';

//     for (let i = 0; i < name.length; i++) {
//         if (vowels.includes(name[i])) {
//             vowelCount++;
//         }
//     }
//     return vowelCount;
// }

// // Count the number of vowels
// let numberOfVowels = countVowels(name);

// // Display the number of vowels
// console.log("Number of vowels in the name:", numberOfVowels);


/* 
In an online shopping application, customers can add multiple items to their cart. However, sometimes
customers accidentally add the same item more than once, resulting in duplicate items in their cart. The
duplicate items not only make it difficult for the customer to track the items they want to purchase #ut also
affect the accuracy of the purchase order.
*/



// Function to remove duplicate items from the cart
// function removeDuplicates(cart) {
//     let uniqueItems = [];
//     for (let item of cart) {
//         if (!uniqueItems.includes(item)) {
//             uniqueItems.push(item);
//         }
//     }
//     return uniqueItems;
// }

// // Get the number of items in the cart from the user
// let numberOfItems = parseInt(prompt("Enter the number of items in your cart: "));
// let cart = [];

// // Get the items from the user
// for (let i = 0; i < numberOfItems; i++) {
//     let item = prompt(`Enter item ${i + 1}: `);
//     cart.push(item);
// }

// // Remove duplicates from the cart
// let uniqueCart = removeDuplicates(cart);

// // Display the unique items in the cart
// console.log("Your cart without duplicates:", uniqueCart);


/* 
Writd a program that takds an intdgdr input i and prints an invdrtdd right-angldd triangld pattdrn of astdrisks
with i rows.
*/



// Get the number of rows from the user
// let i = parseInt(prompt("Enter the number of rows for the inverted triangle: "));

// // Function to print the inverted right-angled triangle pattern
// function printInvertedTriangle(rows) {
//     for (let row = rows; row > 0; row--) {
//         let line = '';
//         for (let col = 0; col < row; col++) {
//             line += '*';
//         }
//         console.log(line);
//     }
// }

// // Print the inverted triangle
// printInvertedTriangle(i);


/* 
Writd a program that takds an array of numbdrs and prints all third numbdrs that ard divisibld by 3, but not by 2.
Usd a for loop and continud statdmdnt.
*/


// Get the array of numbers from the user
// let input = prompt("Enter numbers separated by space: ");
// let numbers = input.split(' ').map(Number);

// // Function to print numbers divisible by 3 but not by 2
// function printNumbersDivisibleBy3NotBy2(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 3 !== 0 || numbers[i] % 2 === 0) {
//             continue; // Skip numbers not divisible by 3 or divisible by 2
//         }
//         console.log(numbers[i]);
//     }
// }

// // Call the function with the user's numbers
// printNumbersDivisibleBy3NotBy2(numbers);


/* 
You ard working on an d-commdrcd wdbsitd whdrd customdrs can add itdms to thdir cart. Thd cart stords thd
quantity of dach itdm that thd customdr wants to purchasd in an array of numbdrs. Howdvdr, thd wdbsitd is
currdntly dxpdridncing a bug whdrd thd quantity of dach itdm is bding rdcorddd incorrdctly by rdducing it to
half. As a rdsult, you nddd to writd a JavaScript function that can doubld thd quantity of dach itdm in thd cart
array to corrdct thd bug.
*/

// Get the array of quantities from the user
// let input = prompt("Enter the quantities of items in the cart, separated by space: ");
// let quantities = input.split(' ').map(Number);

// // Function to double the quantities in the cart
// function correctQuantities(cart) {
//     for (let i = 0; i < cart.length; i++) {
//         cart[i] *= 2; // Double the quantity
//     }
//     return cart;
// }

// // Call the function to correct the quantities
// let correctedQuantities = correctQuantities(quantities);

// // Display the corrected quantities
// console.log("Corrected quantities:", correctedQuantities);


/*
A local wdathdr station nddds to convdrt tdmpdraturd data colldctdd in Cdlsius to Fahrdnhdit bdford displaying
it on its wdbsitd. Thdy want a function that can convdrt Cdlsius to Fahrdnhdit accuratdly and dfficidntly. Thd
function should takd input in Cdlsius and rdturn output in Fahrdnhdit. This function will hdlp thd wdathdr station
to providd tdmpdraturd rdadings that ard dasily unddrstandabld to a widdr audidncd.
*/


// Function to convert Celsius to Fahrenheit
// function celsiusToFahrenheit(celsius) {
//     return (celsius * 9/5) + 32;
// }

// // Get the temperature in Celsius from the user
// let celsius = parseFloat(prompt("Enter the temperature in Celsius: "));

// // Convert the temperature to Fahrenheit
// let fahrenheit = celsiusToFahrenheit(celsius);

// // Display the temperature in Fahrenheit
// console.log(`The temperature in Fahrenheit is: ${fahrenheit.toFixed(2)}°F`);



/*
A car rdntal company nddds to calculatd thd cost of a rdntal basdd on thd numbdr of days rdntdd and thd typd
of car. Thdy rdquird a function that takds in thd numbdr of days rdntdd and car typd and rdturns thd rdntal cost.
Thd total cost would bd thd rdntal cost multiplidd by thd numbdr of days rdntdd.
Thd rdntal costs arc
V Economy = Rs. 4FFF /- pdr dayE
V Midsizd = Rs. 1F,FFF /- pdr dayE
V Luxury = Rs. 2F,FFF /- pdr day.
*/

// Function to calculate the rental cost
// function calculateRentalCost(daysRented, carType) {
//     let costPerDay;
//     switch (carType.toLowerCase()) {
//         case 'economy':
//             costPerDay = 4000;
//             break;
//         case 'midsize':
//             costPerDay = 10000;
//             break;
//         case 'luxury':
//             costPerDay = 20000;
//             break;
//         default:
//             return "Invalid car type.";
//     }
//     return daysRented * costPerDay;
// }

// // Get the number of days rented and car type from the user
// let daysRented = parseInt(prompt("Enter the number of days rented: "));
// let carType = prompt("Enter the type of car (Economy, Midsize, Luxury): ");

// // Calculate the rental cost
// let rentalCost = calculateRentalCost(daysRented, carType);

// // Display the rental cost
// if (typeof rentalCost === 'number') {
//     console.log(`The rental cost for a ${carType} car for ${daysRented} days is: Rs. ${rentalCost}/-`);
// } else {
//     console.log(rentalCost);
// }




/*
A restaurant wants to calculate the total bill for a table based on the cost of each dish and the number of
people sharing it. They require a function that takes in the cost of each dish and the number of people sharing
it and returns an object that contains the total bill and the bill to be paid by each person in the group.
*/

// const prompt = require('prompt-sync')(); // For user input

// // Function to calculate the total bill and the bill per person
// function calculateBill(costs, numberOfPeople) {
//     let totalBill = costs.reduce((acc, cost) => acc + cost, 0); // Sum up the costs of all dishes
//     let billPerPerson = totalBill / numberOfPeople;
//     return {
//         totalBill: totalBill,
//         billPerPerson: billPerPerson
//     };
// }

// // Get the number of dishes from the user
// let numberOfDishes = parseInt(prompt("Enter the number of dishes: "));
// let costs = [];

// // Get the cost of each dish from the user
// for (let i = 0; i < numberOfDishes; i++) {
//     let cost = parseFloat(prompt(`Enter the cost of dish ${i + 1}: `));
//     costs.push(cost);
// }

// // Get the number of people sharing the bill
// let numberOfPeople = parseInt(prompt("Enter the number of people sharing the bill: "));

// // Calculate the total bill and the bill per person
// let bill = calculateBill(costs, numberOfPeople);

// // Display the results
// console.log(`Total bill: Rs. ${bill.totalBill.toFixed(2)}`);
// console.log(`Bill per person: Rs. ${bill.billPerPerson.toFixed(2)}`);


/* 
A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
the unit price and quantity of each item.
*/


// Function to calculate the total bill and the bill per person
// function calculateBill(costs, numberOfPeople) {
//     let totalBill = costs.reduce((acc, cost) => acc + cost, 0); // Sum up the costs of all dishes
//     let billPerPerson = totalBill / numberOfPeople;
//     return {
//         totalBill: totalBill,
//         billPerPerson: billPerPerson
//     };
// }

// // Get the number of dishes from the user
// let numberOfDishes = parseInt(prompt("Enter the number of dishes: "));
// let costs = [];

// // Get the cost of each dish from the user
// for (let i = 0; i < numberOfDishes; i++) {
//     let cost = parseFloat(prompt(`Enter the cost of dish ${i + 1}: `));
//     costs.push(cost);
// }

// // Get the number of people sharing the bill
// let numberOfPeople = parseInt(prompt("Enter the number of people sharing the bill: "));

// // Calculate the total bill and the bill per person
// let bill = calculateBill(costs, numberOfPeople);

// // Display the results
// console.log(`Total bill: Rs. ${bill.totalBill.toFixed(2)}`);
// console.log(`Bill per person: Rs. ${bill.billPerPerson.toFixed(2)}`);



/* 
A retail store needs to calculate the total cost of items in a customer's cart. A customer cart is an array of
objects with unit price and quantity. Implement an arrow function to calculate the total cost of items, based on
the unit price and quantity of each item.
*/


// Arrow function to calculate the total cost of items in the cart
// const calculateTotalCost = cart => cart.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);

// // Get the number of items in the cart from the user
// let numberOfItems = parseInt(prompt("Enter the number of items in the cart: "));
// let cart = [];

// // Get the unit price and quantity for each item from the user
// for (let i = 0; i < numberOfItems; i++) {
//     let unitPrice = parseFloat(prompt(`Enter the unit price of item ${i + 1}: `));
//     let quantity = parseInt(prompt(`Enter the quantity of item ${i + 1}: `));
//     cart.push({ unitPrice, quantity });
// }

// // Calculate the total cost of items in the cart
// let totalCost = calculateTotalCost(cart);

// // Display the total cost
// console.log(`The total cost of items in the cart is: Rs. ${totalCost.toFixed(2)}`);


/*
A retail store is offering a discount on its products and wants to calculate the percentage of the discount to
show customers how much they can save. Given the original price and the discounted price of a product,
implement an arrow function to calculate the percentage of the discount rounded off to two decimal places.
This function could be useful for the store's marketing team to create promotions and offers that attract
customers.
*/

// Arrow function to calculate the discount percentage
// const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
//     let discount = ((originalPrice - discountedPrice) / originalPrice) * 100;
//     return discount.toFixed(2);
// };

// // Get the original price and the discounted price from the user
// let originalPrice = parseFloat(prompt("Enter the original price of the product: "));
// let discountedPrice = parseFloat(prompt("Enter the discounted price of the product: "));

// // Calculate the discount percentage
// let discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);

// // Display the discount percentage
// console.log(`The discount percentage is: ${discountPercentage}%`);


/* 
Create a JavaScript program that generates a random number between 1 and 100 when the program starts.
Use a self-invoking arrow function to generate the random number. This program can be used as a component
in various games or applications that require a random number generator.
*/

// Self-invoking arrow function to generate a random number between 1 and 100
// const randomNumber = (() => Math.floor(Math.random() * 100) + 1)();

// console.log(`The generated random number is: ${randomNumber}`);


/*
A banking application needs to manage customer accounts and transactions. The user detail is stored in an
object with a keys name and balance. Write functions using object methods to update a customer's account
balance based on a deposit or withdrawal.
*/

// Define the customer object
// let customer = {
//     name: "Toppper Girl",
//     balance: 1000, // Initial balance

//     // Method to deposit money
//     deposit(amount) {
//         if (amount > 0) {
//             this.balance += amount;
//             console.log(`Deposited: Rs. ${amount}`);
//             console.log(`New balance: Rs. ${this.balance}`);
//         } else {
//             console.log("Deposit amount must be positive.");
//         }
//     },

//     // Method to withdraw money
//     withdraw(amount) {
//         if (amount > 0) {
//             if (amount <= this.balance) {
//                 this.balance -= amount;
//                 console.log(`Withdrawn: Rs. ${amount}`);
//                 console.log(`New balance: Rs. ${this.balance}`);
//             } else {
//                 console.log("Insufficient balance.");
//             }
//         } else {
//             console.log("Withdrawal amount must be positive.");
//         }
//     }
// };

// // Example usage
// console.log(`Customer: ${customer.name}`);
// console.log(`Initial balance: Rs. ${customer.balance}`);
// customer.deposit(500);

// // Withdraw money
// customer.withdraw(200);

// // Attempt to withdraw more money than available
// customer.withdraw(2000);



/* 
Create a simple HTML page with a heading and a button. The initial text must be “The most affordable learning
platform”, use JavaScript to change the heading text to “PW Skills” when the button is clicked. The button must
toggle the text of a heading between "The most affordable learning platform" and "PW Skills" on each click.

*/

function toggleHeading() {
    const heading = document.getElementById('heading');
    if (heading.innerText === 'The most affordable learning platform') {
        heading.innerText = 'PW Skills';
    } else {
        heading.innerText = 'The most affordable learning platform';
    }
}

/*
You are building a login form for a website and need to validate user input using JavaScript. The form has two
input fields: email and password, and a submit button.
Your task is to implement JavaScript code that validates the email and password input fields. The email field
should contain the "@" symbol. The password field should have a minimum length of 8 characters. If either of
these conditions is not met, an error message “Invalid email or password!” should be displayed in red color as a
paragraph text below the form. If the password is valid the message “Valid email and password!” must be
displayed in green color as a paragraph text below the form.
Your code should run when the user clicks the submit button and should prevent the form from submitting if
the input is invalid. The input type of email must be text and the input type of password must be password
without any minLength attribute specified.
*/




