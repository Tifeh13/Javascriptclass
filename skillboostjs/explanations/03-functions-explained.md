# 03 - Functions (Explained)

Matching file: `code/03-functions.js`

---

## PART 1: What is a function?

```js
function sayHello() {
  console.log("Hello!");
}

sayHello();
```

- `function sayHello() {` starts building a reusable block of instructions named `sayHello`. The `()` is empty because this one needs no input.
- `console.log("Hello!");` is the one instruction inside it.
- `}` closes the function — at this point it's just been **built**, not run yet.
- `sayHello();` is the call — adding `()` is what actually **runs** it.

**Output:** `Hello!`

---

## PART 2: Functions with parameters

```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Ade");
greet("Chidi");
```

- `(name)` is a parameter — an empty placeholder box.
- `greet("Ade")` fills that box with `"Ade"` for this call.
- `greet("Chidi")` runs the SAME function again, but this time the box is filled with `"Chidi"` instead.
- The instructions were written once, but reused twice with different data.

**Output:**
```
Hello, Ade!
Hello, Chidi!
```

---

## PART 3: Return values

```js
function add(a, b) {
  return a + b;
}

let result = add(3, 4);
console.log(result);
```

- `return a + b;` hands the result BACK to whoever called the function — it does NOT print anything itself.
- `add(3, 4)` runs the function with `a = 3` and `b = 4`, and the returned value (`7`) gets stored inside `result`.
- `console.log(result)` is what actually shows it on screen.

**Output:** `7`

**Key point:** `return` gives you a value to use later; `console.log` inside a function just prints — it doesn't hand anything back.

---

## PART 4: Function expressions

```js
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(3, 4));
```

- Instead of `function multiply(...)`, this function has NO name of its own — it's stored directly inside a variable called `multiply`.
- We call it exactly the same way: `multiply(3, 4)`.

**Output:** `12`

---

## PART 5: Arrow functions

```js
const subtract = (a, b) => {
  return a - b;
};

console.log(subtract(10, 4));

const square = (n) => n * n;
console.log(square(5));
```

- `(a, b) => { return a - b; }` is just a shorter way to write a function expression — `=>` replaces the word `function`.
- `subtract(10, 4)` → `10 - 4` → **Output:** `6`
- `const square = (n) => n * n;` — when the function body is just ONE line, you can drop the `{ }` and the word `return` entirely. JS understands that the result of `n * n` is automatically returned.
- `square(5)` → `5 * 5` → **Output:** `25`

---

## PART 6: Default parameters

```js
function greetUser(name = "Guest") {
  console.log("Welcome, " + name + "!");
}

greetUser("Ade");
greetUser();
```

- `name = "Guest"` inside the parentheses means: "if nobody passes a value in for `name`, use `'Guest'` instead."
- `greetUser("Ade")` — `"Ade"` fills the box, so `"Guest"` is never used.
- `greetUser()` — nothing is passed in at all, so JS falls back to the default value, `"Guest"`.

**Output:**
```
Welcome, Ade!
Welcome, Guest!
```

---

## PART 7: Try it yourself

Practice tasks (isEven, greetTime, a default "course" parameter) — no fixed output, this is for students to build and test themselves.
