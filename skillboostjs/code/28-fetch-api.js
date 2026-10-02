// ============================================================
// 15. FETCH API - BEGINNER LESSON
// ============================================================
//
// NOTE: fetch() is built into modern Node.js (v18+) AND into
// every browser, so this file can be run with "node" directly.
// It needs an internet connection, since it calls a real
// public test API (jsonplaceholder.typicode.com).
//
// HOW TO USE THIS FILE:
// Uncomment ONE block at a time, run it with: node 28-fetch-api.js
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS FETCH? (in the simplest way possible)
// ------------------------------------------------------------
//
// Imagine sending a letter asking a library for a book, then
// waiting for them to mail it back to you. fetch() is exactly
// that - it sends a request out over the internet to another
// server, and waits for that server to send data back.
//
// fetch() ALWAYS returns a Promise, so everything from the
// last 2 lessons applies here directly.


// ------------------------------------------------------------
// PART 2: A BASIC FETCH REQUEST
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(function (response) {
//     console.log(response);
//   });
//
// // The ".then()" here gives us a RESPONSE OBJECT - but notice
// // it's NOT the actual data yet! It's more like an envelope
// // that CONTAINS the data, which we still need to open.


// ------------------------------------------------------------
// PART 3: READING THE RESPONSE AS JSON
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(function (response) {
//     return response.json();   // "opens the envelope" - turns it into usable data
//   })
//   .then(function (data) {
//     console.log(data);
//   });
//
// // response.json() ALSO returns a Promise (reading/parsing the
// // data takes a moment too), which is why we chain ANOTHER
// // .then() after it to finally get the real, usable data.


// ------------------------------------------------------------
// PART 4: THE SAME THING, USING async/await (cleaner)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// async function getUser() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   let data = await response.json();
//   console.log(data);
// }
//
// getUser();
//
// // Same 2 steps as before (fetch, then .json()), but written
// // top-to-bottom instead of chained .then() calls.


// ------------------------------------------------------------
// PART 5: USING JUST ONE PIECE OF THE DATA
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// async function getUserName() {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   let data = await response.json();
//   console.log("Name:", data.name);
//   console.log("Email:", data.email);
// }
//
// getUserName();
//
// // Once "data" is a normal JS object, we read from it exactly
// // like any object we've already learned - dot notation.


// ------------------------------------------------------------
// PART 6: HANDLING ERRORS (what if the request fails?)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// async function getUser() {
//   try {
//     let response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Fetch failed: " + error.message);
//   }
// }
//
// getUser();
//
// // Wrapping fetch in try/catch protects your program if the
// // internet drops, the server is down, or the URL is wrong.


// ------------------------------------------------------------
// PART 7: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Fetch https://jsonplaceholder.typicode.com/posts/1 and log
//    the full data.
// 2. Fetch the same URL, but this time only log the "title".
// 3. Wrap your fetch in try/catch, and TEST the catch block by
//    deliberately breaking the URL (e.g adding extra letters).
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. fetch(url) sends a request to a server and returns a Promise.
// 2. The first .then() gives you a RESPONSE object, not the data
//    itself.
// 3. response.json() "opens the envelope" and returns ANOTHER
//    Promise with the actual usable data.
// 4. async/await makes fetch calls read top-to-bottom, cleanly.
// 5. Always wrap fetch in try/catch to handle network/server
//    failures gracefully.
// ============================================================
