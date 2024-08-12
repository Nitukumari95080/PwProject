/* 
Bui:d a Server Using Http Modu:e Node<S with api endpoints for Getting Products Dat9
" ‘/’G →G send msg as “We:come to Men & Women Dummy Data”F
" G‘/men’ →G send 10 products data of menF
" ‘/women’G →G send 10 products data of wome;
" ‘/other’G → send response as page not found
Hin#: You can use any data, send data in json format
*/
//const http = require('http'); // Import the HTTP module


// Sample data for men and women products
// const menProducts = [
//     { id: 1, name: 'Men Product 1', price: 29.99 },
//     { id: 2, name: 'Men Product 2', price: 39.99 },
//     { id: 3, name: 'Men Product 3', price: 49.99 },
//     { id: 4, name: 'Men Product 4', price: 59.99 },
//     { id: 5, name: 'Men Product 5', price: 69.99 },
//     { id: 6, name: 'Men Product 6', price: 79.99 },
//     { id: 7, name: 'Men Product 7', price: 89.99 },
//     { id: 8, name: 'Men Product 8', price: 99.99 },
//     { id: 9, name: 'Men Product 9', price: 109.99 },
//     { id: 10, name: 'Men Product 10', price: 119.99 },
// ];

// const womenProducts = [
//     { id: 1, name: 'Women Product 1', price: 29.99 },
//     { id: 2, name: 'Women Product 2', price: 39.99 },
//     { id: 3, name: 'Women Product 3', price: 49.99 },
//     { id: 4, name: 'Women Product 4', price: 59.99 },
//     { id: 5, name: 'Women Product 5', price: 69.99 },
//     { id: 6, name: 'Women Product 6', price: 79.99 },
//     { id: 7, name: 'Women Product 7', price: 89.99 },
//     { id: 8, name: 'Women Product 8', price: 99.99 },
//     { id: 9, name: 'Women Product 9', price: 109.99 },
//     { id: 10, name: 'Women Product 10', price: 119.99 },
// ];

// // Create the HTTP server
// const server = http.createServer((req, res) => {
//     // Set the content type to JSON for all responses
//     res.setHeader('Content-Type', 'application/json');

//     // Routing logic
//     if (req.url === '/') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Welcome to Men & Women Dummy Data');
//     } else if (req.url === '/men') {
//         res.writeHead(200);
//         res.end(JSON.stringify(menProducts));
//     } else if (req.url === '/women') {
//         res.writeHead(200);
//         res.end(JSON.stringify(womenProducts));
//     } else {
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('Page not found');
//     }
// });

// Define the port the server will listen on
// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });



/* 
Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Expresl
" ‘/’G →G send counter data as {counter:counter^
" `/increment` → increment counter by 1 and send in response :atest data as {counter:counter^
" `/decrement` → decrement counter by 1 and send in response :atest data as {counter:counter}
No#e: Using Express is Mandatory for this Question
*/

// const express = require('express'); // Import Express
// const app = express(); // Create an Express app
// let counter = 0; // Initialize the counter

// // Root endpoint to send the current counter value
// app.get('/', (req, res) => {
//     res.json({ counter: counter });
// });

// // Increment endpoint to increase the counter by 1
// app.get('/increment', (req, res) => {
//     counter++;
//     res.json({ counter: counter });
// });

// // Decrement endpoint to decrease the counter by 1
// app.get('/decrement', (req, res) => {
//     counter--;
//     res.json({ counter: counter });
// });

// // Start the server on port 3000
// const port = 3001;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });



/*
Q.3_Create a Basic Server with Different Routes using Expresl
" `/`G G → send response as {msg:`I am homepage`^
" `/about`G → send response as {msg:`I am about page`^
" `/contact ` → send response as {emai::`suppor#@pwskills.com`}
*/


// const express = require('express')// Import Express
// const app = express(); // Create an Express app

// // Root route
// app.get('/', (req, res) => {
//     res.json({ msg: 'I am homepage' });
// });

// // About route
// app.get('/about', (req, res) => {
//     res.json({ msg: 'I am about page' });
// });

// // Contact route
// app.get('/contact', (req, res) => {
//     res.json({ email: 'support@pwskills.com' });
// });

// // Start the server on port 3000
// const port = 3002;
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


/* 
Build a Server that Generate! Random Number U!ing Epre!
 ‘/random’ → !end random number in re!pon!e {random:10}
*/


const express = require('express')// Import Express
const app = express(); // Create an Express app

// Random number route
app.get('/random', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    res.json({ random: randomNumber });
});

// Start the server on port 3000
const port = 3003;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
