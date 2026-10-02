# 01 - Object Intro (Explained)

Matching file: `code/01-objects-intro.js`

---

## PART 1: What is an object?

```js
let student = {
  name: "Ade",
  age: 20,
  course: "JavaScript"
};
```

- `let student =` creates a new variable called `student`.
- `{` opens the object — this is where the "box" starts.
- `name: "Ade"` — `name` is the KEY (the label), `"Ade"` is the VALUE (the answer). The colon `:` separates them.
- `age: 20` — another key/value pair. Numbers don't need quotes.
- `course: "JavaScript"` — the last pair. No comma after the last one — nothing else is coming.
- `}` closes the object. `;` ends the line.

**Big idea:** instead of 3 separate variables floating around, everything about "student" is now bundled in ONE place.

---

## PART 2: Key : Value pairs

```js
console.log(student);
```

- `console.log()` is how we print something to the terminal.
- We hand it the whole `student` object, so it prints everything inside it at once.

**Output:**
```
{ name: 'Ade', age: 20, course: 'JavaScript' }
```

---

## PART 3: Reading a value (dot notation)

```js
console.log(student.name);    // Ade
console.log(student.age);     // 20
console.log(student.course);  // JavaScript
```

- `student` is the object.
- `.` (the dot) means "go inside this object."
- `name` tells JS exactly which key to grab.
- So `student.name` = "go inside student, give me the value under the key called name."

**Output:**
```
Ade
20
JavaScript
```

---

## PART 4: Reading a value (bracket notation)

```js
console.log(student["name"]);   // Ade
console.log(student["age"]);    // 20
```

- Same job as dot notation, but the key goes inside square brackets **as text** (in quotes).
- This matters because bracket notation lets you use a **variable** instead of typing the key directly — dot notation can't do that.

```js
let key = "age";
console.log(student[key]);
```
- `key` holds the text `"age"`.
- `student[key]` becomes `student["age"]` because that's what's stored inside `key`.
- **Output:** `20`

---

## PART 5: Changing a value

```js
console.log("Before:", student.age);
student.age = 21;
console.log("After:", student.age);
```

- `student.age` already exists, so `student.age = 21` **replaces** 20 with 21 — it does NOT create anything new.

**Output:**
```
Before: 20
After: 21
```

---

## PART 6: Adding a new property

```js
student.course = "JavaScript";
```

- Because `course` did **not** already exist on `student`, this line creates a brand-new property.
- If it already existed, this same line would just change it instead.

---

## PART 7: Deleting a property

```js
delete student.course;
```

- `delete` is a keyword whose only job is to remove a property completely.
- After this, `course` is gone entirely — not empty, just gone.

---

## PART 8: Methods (functions inside objects)

```js
let student = {
  name: "Ade",
  age: 20,
  greet: function () {
    console.log("Hello, my name is " + this.name);
  }
};

student.greet();
```

- `greet` is a key, just like `name` and `age` — but its VALUE is a function instead of plain data.
- `this.name` means "go inside THIS same object and grab its name property" → `"Ade"`.
- `student.greet()` — the `()` is what actually **runs** the function. Without it, JS just shows you the function's code, it doesn't execute it.

**Output:** `Hello, my name is Ade`

---

## PART 9: The `this` keyword

```js
let student = {
  name: "Ade",
  sayCourse: function () {
    console.log(this.name + " is learning JavaScript");
  }
};

student.sayCourse();
```

- `this` always means "the object currently calling this method" — here, that's `student`.
- So `this.name` fetches `student.name`, which is `"Ade"`.

**Output:** `Ade is learning JavaScript`

---

## PART 10: Real-life comparison — a car object

```js
let car = {
  brand: "Toyota",
  model: "Corolla",
  color: "Black",
  start: function () {
    console.log(this.brand + " has started. Vroom!");
  },
  stop: function () {
    console.log(this.brand + " has stopped.");
  }
};
```

- `brand`, `model`, `color` are properties — things the car **has**.
- `start` and `stop` are methods — things the car **can do**.
- `car.brand` and `car.color` just read plain data.
- `car.start()` and `car.stop()` run the functions (note the brackets).

**Output:**
```
Toyota
Black
Toyota has started. Vroom!
Toyota has stopped.
```

---

## PART 11: Try it yourself

This is a blank task — build a `phone` object with `brand`, `price`, and a `ring` method, then practice dot/bracket notation and calling the method. No output to show here — it's for the student to fill in.
