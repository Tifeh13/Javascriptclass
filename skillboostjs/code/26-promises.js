// ============================================================
// 13. PROMISES - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Uncomment ONE block at a time, run it with: node 26-promises.js
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS A PROMISE? (in the simplest way possible)
// ------------------------------------------------------------
//
// Imagine ordering food at a restaurant. The waiter doesn't
// hand you the food instantly - they give you a PROMISE: "your
// food is coming." Eventually, one of 2 things happens:
//   - the food arrives (the promise is KEPT / "resolved")
//   - something goes wrong, like they're out of stock (the
//     promise is BROKEN / "rejected")
//
// A JS Promise represents a value that ISN'T ready yet, but
// WILL be, at some point in the future (usually because it's
// waiting on something slow, like loading data from the internet).


// ------------------------------------------------------------
// PART 2: CREATING A PROMISE
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let orderFood = new Promise(function (resolve, reject) {
//   let foodIsAvailable = true;
//
//   if (foodIsAvailable) {
//     resolve("Here is your food!");   // the promise is KEPT
//   } else {
//     reject("Sorry, we're out of stock.");  // the promise is BROKEN
//   }
// });
//
// console.log(orderFood);
//
// // "resolve" and "reject" are two SPECIAL functions Promise
// // gives us automatically. Calling resolve(...) means "success,
// // here's the result." Calling reject(...) means "failure,
// // here's the reason why."


// ------------------------------------------------------------
// PART 3: USING A PROMISE - .then() AND .catch()
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let orderFood = new Promise(function (resolve, reject) {
//   let foodIsAvailable = true;
//
//   if (foodIsAvailable) {
//     resolve("Here is your food!");
//   } else {
//     reject("Sorry, we're out of stock.");
//   }
// });
//
// orderFood
//   .then(function (result) {
//     console.log("Success: " + result);
//   })
//   .catch(function (error) {
//     console.log("Error: " + error);
//   });
//
// // .then() runs ONLY if the promise was resolved (success).
// // .catch() runs ONLY if the promise was rejected (failure).


// ------------------------------------------------------------
// PART 4: A MORE REALISTIC EXAMPLE - WAITING FOR TIME TO PASS
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let waitTwoSeconds = new Promise(function (resolve) {
//   console.log("Waiting...");
//   setTimeout(function () {
//     resolve("2 seconds have passed!");
//   }, 2000);   // 2000 milliseconds = 2 seconds
// });
//
// waitTwoSeconds.then(function (result) {
//   console.log(result);
// });
//
// console.log("This line prints IMMEDIATELY, before the wait finishes!");
//
// // This proves promises are ASYNCHRONOUS - JS doesn't FREEZE
// // and wait. It keeps running the rest of the code, and comes
// // back to run .then() only once the promise is actually resolved.


// ------------------------------------------------------------
// PART 5: CHAINING PROMISES
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let step1 = new Promise(function (resolve) {
//   resolve(5);
// });
//
// step1
//   .then(function (result) {
//     console.log("Step 1 result:", result);
//     return result * 2;          // passes 10 to the NEXT .then()
//   })
//   .then(function (result) {
//     console.log("Step 2 result:", result);
//     return result + 1;          // passes 11 to the NEXT .then()
//   })
//   .then(function (result) {
//     console.log("Step 3 result:", result);
//   });
//
// // Each .then() can "return" a value, which gets handed to the
// // NEXT .then() in the chain - letting you build a pipeline of
// // steps that each happen one after another.


// ------------------------------------------------------------
// PART 6: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Create a Promise that resolves with your name after 1
//    second, using setTimeout, and log it with .then().
// 2. Create a Promise that REJECTS with an error message, and
//    handle it with .catch().
// 3. Chain 3 .then() calls together, where each one multiplies
//    the previous result by 2.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. A Promise represents a value that isn't ready yet, but
//    will be, eventually.
// 2. new Promise((resolve, reject) => {...}) - call resolve()
//    on success, reject() on failure.
// 3. .then() runs on success; .catch() runs on failure.
// 4. Promises are ASYNCHRONOUS - the rest of your code keeps
//    running while a promise is still pending.
// 5. .then() calls can be CHAINED, each one passing its result
//    to the next.
// ============================================================
