# 09 - Iterations / Loops (Explained)

Matching file: `code/09-iterations.js`

---

## PART 1: What is iteration?

A loop repeats the same task again and again, automatically, until a condition says "stop."

---

## PART 2: For loop

```js
for (let i = 0; i < 5; i++) {
  console.log("Knocking on door " + i);
}
```

A `for` loop has 3 parts, separated by semicolons:
- **`let i = 0`** — runs ONCE at the start. Creates a counter starting at 0.
- **`i < 5`** — checked BEFORE every round. As long as it's true, the loop keeps going; the moment it's false, it stops.
- **`i++`** — runs AFTER every round, increasing `i` by 1.

**Output:**
```
Knocking on door 0
Knocking on door 1
Knocking on door 2
Knocking on door 3
Knocking on door 4
```
(Stops once `i` reaches 5, because `5 < 5` is false.)

---

## PART 3: While loop

```js
let i = 0;
while (i < 5) {
  console.log("While loop count: " + i);
  i++;
}
```

- The counter `i` is created BEFORE the loop starts, and we manually increase it ourselves inside the loop.
- Before every round, JS checks `i < 5`. If we FORGET the `i++` line, `i` would never change, and the loop would run forever (an "infinite loop" — a very common beginner mistake).

**Output:** same as the for loop above (0 through 4).

---

## PART 4: Do...while loop

```js
let i = 0;
do {
  console.log("Do-while count: " + i);
  i++;
} while (i < 5);
```

- Almost the same as `while`, EXCEPT: the code runs ONE TIME first, and only THEN checks the condition.
- This means a `do...while` loop always runs **at least once**, even if the condition is false from the very start.

---

## PART 5: For...of loop

```js
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

- Walks through the VALUES inside an array (or Set, or string), one at a time.
- Unlike a regular `for` loop, you don't manage index numbers yourself at all.

**Output:**
```
Apple
Banana
Mango
```

---

## PART 6: For...in loop

```js
let person = { name: "Ade", age: 20, course: "JavaScript" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}
```

- Walks through the KEYS of an object.
- `person[key]` uses bracket notation to fetch the actual value for the current key.

**Output:**
```
name: Ade
age: 20
course: JavaScript
```

---

## PART 7: break and continue

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log("break example:", i);
}
```
- The loop is set up to run i = 0 to 9, but `break` immediately STOPS the entire loop the moment `i` becomes 5.
- **Output:** `0, 1, 2, 3, 4` — then it stops completely.

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log("continue example:", i);
}
```
- `continue` only skips the CURRENT round (when `i` is 2) — the loop itself keeps going afterward.
- **Output:** `0, 1, 3, 4` — 2 is skipped, but the loop doesn't stop.

---

## PART 8: Try it yourself

Practice tasks with for, while, for...of, for...in, and continue. Students build and test these themselves.
