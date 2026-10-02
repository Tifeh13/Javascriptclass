// ============================================================
// 14. ASYNC/AWAIT - BEGINNER LESSON
// ============================================================
//
// NOTE: async/await is just a NICER-LOOKING way to work with
// the SAME Promises from the previous lesson. Make sure
// 26-promises.js is taught first.
//
// HOW TO USE THIS FILE:
// Uncomment ONE block at a time, run it with: node 27-async-await.js
// ============================================================


// ------------------------------------------------------------
// PART 1: WHY ASYNC/AWAIT? (in the simplest way possible)
// ------------------------------------------------------------
//
// Compare these two ways of doing the SAME thing:
//
// WITH .then() (from the Promises lesson):
//   getData().then(result => console.log(result));
//
// WITH async/await (this lesson):
//   let result = await getData();
//   console.log(result);
//
// async/await lets asynchronous code (code that waits for
// something) look like NORMAL, top-to-bottom code, instead of
// nested .then() chains. It's easier to read, especially once
// you have MANY steps.


// ------------------------------------------------------------
// PART 2: THE "async" KEYWORD
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// async function sayHello() {
//   return "Hello!";
// }
//
// sayHello().then(function (result) {
//   console.log(result);
// });
//
// // Putting "async" in front of a function makes it AUTOMATICALLY
// // return a Promise, even if you just "return" a plain value
// // like normal. That's why we can still use .then() on it.


// ------------------------------------------------------------
// PART 3: THE "await" KEYWORD
// ------------------------------------------------------------
//
// "await" can ONLY be used INSIDE an async function. It PAUSES
// that function until the Promise finishes, then gives you the
// resolved value directly - no .then() needed.
//
// UNCOMMENT BELOW AND RUN IT:

// function waitTwoSeconds() {
//   return new Promise(function (resolve) {
//     setTimeout(function () {
//       resolve("2 seconds have passed!");
//     }, 2000);
//   });
// }
//
// async function run() {
//   console.log("Waiting...");
//   let result = await waitTwoSeconds();
//   console.log(result);
//   console.log("This prints AFTER the wait, unlike with plain Promises!");
// }
//
// run();


// ------------------------------------------------------------
// PART 4: ERROR HANDLING WITH try/catch
// ------------------------------------------------------------
//
// Instead of .catch(), async/await uses the SAME try/catch you
// already learned in the Errors lesson.
//
// UNCOMMENT BELOW AND RUN IT:

// function riskyTask() {
//   return new Promise(function (resolve, reject) {
//     let success = false;
//     if (success) {
//       resolve("It worked!");
//     } else {
//       reject("Something went wrong!");
//     }
//   });
// }
//
// async function run() {
//   try {
//     let result = await riskyTask();
//     console.log(result);
//   } catch (error) {
//     console.log("Caught an error: " + error);
//   }
// }
//
// run();


// ------------------------------------------------------------
// PART 5: MULTIPLE STEPS, ONE AFTER ANOTHER
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// function double(n) {
//   return new Promise(resolve => resolve(n * 2));
// }
//
// async function run() {
//   let step1 = await double(5);
//   console.log("Step 1:", step1);    // 10
//
//   let step2 = await double(step1);
//   console.log("Step 2:", step2);    // 20
//
//   let step3 = await double(step2);
//   console.log("Step 3:", step3);    // 40
// }
//
// run();
//
// // Notice how this reads top-to-bottom, like normal code, even
// // though each step is actually asynchronous underneath.


// ------------------------------------------------------------
// PART 6: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Write an async function that awaits a Promise which
//    resolves with your name after 1 second.
// 2. Write an async function with try/catch that handles a
//    Promise which rejects with a custom error message.
// 3. Chain 3 awaited steps together, where each one adds 10 to
//    the previous result.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. async/await is a cleaner way to work with the SAME Promises.
// 2. "async" in front of a function makes it return a Promise.
// 3. "await" pauses an async function until a Promise finishes,
//    and gives back the resolved value directly.
// 4. Error handling uses regular try/catch, not .catch().
// 5. async/await lets asynchronous steps read top-to-bottom,
//    like normal code.
// ============================================================
