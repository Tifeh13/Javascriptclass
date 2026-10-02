// ============================================================
// JAVASCRIPT MAPS - BEGINNER LESSON
// ============================================================
//
// HOW TO USE THIS FILE:
// Everything below is commented out in blocks.
// Uncomment ONE block at a time, run it with: node 08-maps.js
// Explain it to the students, then move to the next block.
//
// To uncomment: select the lines, then press Ctrl + / (Windows)
// or Cmd + / (Mac). Press it again to re-comment.
// ============================================================


// ------------------------------------------------------------
// PART 1: WHAT IS A MAP? (in the simplest way possible)
// ------------------------------------------------------------
//
// Think of a school locker room. Each locker has a NUMBER (the
// key) and INSIDE it holds a student's bag (the value). You use
// the locker number to find the exact bag.
//
// A MAP is a collection of KEY -> VALUE pairs, just like an
// object, but a Map is more flexible: the "key" can be ANY
// type, not just plain text.
//
// UNCOMMENT BELOW AND RUN IT:

// let capitals = new Map();
// capitals.set("Nigeria", "Abuja");
// capitals.set("Ghana", "Accra");
// capitals.set("Kenya", "Nairobi");
//
// console.log(capitals);
// console.log(capitals.get("Nigeria"));   // Abuja


// ------------------------------------------------------------
// PART 2: MAP SIZE, CHECKING, AND DELETING
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let capitals = new Map();
// capitals.set("Nigeria", "Abuja");
// capitals.set("Ghana", "Accra");
//
// console.log(capitals.size);          // 2
// console.log(capitals.has("Ghana"));  // true
//
// capitals.delete("Ghana");
// console.log(capitals);


// ------------------------------------------------------------
// PART 3: LOOPING THROUGH A MAP
// ------------------------------------------------------------
//
// UNCOMMENT BELOW AND RUN IT:

// let scores = new Map();
// scores.set("Ade", 85);
// scores.set("Chidi", 90);
// scores.set("Tolu", 78);
//
// for (let [name, score] of scores) {
//   console.log(name + " scored " + score);
// }


// ------------------------------------------------------------
// PART 4: MAP VS OBJECT (quick comparison)
// ------------------------------------------------------------
//
// - Object keys are usually text (strings)
// - Map keys can be ANY type (numbers, objects, even functions)
// - Map keeps the ORDER items were added
// - Map has .size built in; objects need Object.keys(obj).length


// ------------------------------------------------------------
// PART 5: TRY IT YOURSELF (give this to students as a task)
// ------------------------------------------------------------
//
// 1. Create a Map of 3 students and their scores. Print one
//    score using .get().
// 2. Check if a student exists in the Map using .has().
// 3. Loop through the Map and print "name: score" for everyone.
//
// Write your answer below this line:



// ============================================================
// QUICK SUMMARY (read this out loud to students at the end)
// ============================================================
//
// 1. A Map stores key -> value pairs, like a smarter object.
// 2. .set(key, value) adds, .get(key) reads, .delete(key) removes.
// 3. .has(key) checks existence, .size gives the count.
// 4. for...of [key, value] loops through a Map.
// ============================================================
