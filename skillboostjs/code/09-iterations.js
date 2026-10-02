// ============================================================
// JAVASCRIPT ITERATIONS (LOOPS) - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 09-iterations.js
// Explain it to the students, then move to the next block.
//
// To uncomment: select the lines, then press Ctrl + / (Windows)
// or Cmd + / (Mac). Press it again to re-comment.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS ITERATION? (in the simplest way possible)
// ------------------------------------------------------------
//
// Imagine you have to knock on every door on your street to
// deliver a letter. You walk to door 1, deliver, walk to door 2,
// deliver, and so on, until there are no more doors left.
//
// ITERATION (a loop) is that repeating action in code - doing
// the same task again and again until a condition is done.


// ------------------------------------------------------------
// PART 2: FOR LOOP (when you know how many times)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// for (let i = 0; i < 5; i++) {
//   console.log("Knocking on door " + i);
// }


// ------------------------------------------------------------
// PART 3: WHILE LOOP (repeat WHILE a condition is true)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let i = 0;
// while (i < 5) {
//   console.log("While loop count: " + i);
//   i++;
// }


// ------------------------------------------------------------
// PART 4: DO...WHILE LOOP (runs at least once)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let i = 0;
// do {
//   console.log("Do-while count: " + i);
//   i++;
// } while (i < 5);


// ------------------------------------------------------------
// PART 5: FOR...OF LOOP (walks through VALUES)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let fruits = ["Apple", "Banana", "Mango"];
//
// for (let fruit of fruits) {
//   console.log(fruit);
// }


// ------------------------------------------------------------
// PART 6: FOR...IN LOOP (walks through KEYS)
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let person = { name: "Ade", age: 20, course: "JavaScript" };
//
// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }


// ------------------------------------------------------------
// PART 7: BREAK AND CONTINUE
// ------------------------------------------------------------
//
// break    -> stop the loop completely
// continue -> skip this round and go to the next one
//
// UNCOMMENT BELOW AND RUN IT:

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break;   // stop the loop when i reaches 5
//   }
//   console.log("break example:", i);
// }
//
// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     continue;   // skip when i is 2
//   }
//   console.log("continue example:", i);
// }


// ------------------------------------------------------------
// PART 8: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Use a for loop to print numbers 1 to 10.
// 2. Use a while loop to print numbers 10 down to 1.
// 3. Use for...of to loop through an array of 4 colors.
// 4. Use for...in to loop through a "car" object and print each property.
// 5. Use a for loop that skips number 3 using "continue".
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. for: repeat a known number of times.
// 2. while: repeat while a condition stays true.
// 3. do...while: same as while, but runs at least once.
// 4. for...of: loops through VALUES (arrays, sets).
// 5. for...in: loops through KEYS (objects).
// 6. break stops a loop, continue skips one round.
// ============================================================
