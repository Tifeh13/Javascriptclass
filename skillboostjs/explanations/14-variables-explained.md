# 14 - Variables (Explained)

Matching file: `code/14-variables.js`

---

## PART 1: What is a variable?

```js
let age = 20;
console.log(age);
```

- A variable is a labelled "bucket" that stores a value.
- `let age = 20` creates the bucket, labels it `age`, and puts `20` inside.
- `console.log(age)` looks inside the bucket and prints what's there.

**Output:** `20`

---

## PART 2: let vs const

```js
let age = 20;
age = 21;
console.log(age);

const name = "Ade";
// name = "Chidi";   // ERROR!
```

- `let` buckets can be refilled later — `age = 21` replaces `20` with `21`, no problem.
- `const` buckets are sealed the moment you fill them. Trying to reassign `name` throws an error: `Assignment to constant variable.`

**Output:** `21`

---

## PART 3: const doesn't freeze objects/arrays

```js
const user = { name: "Ade" };
user.name = "Chidi";
console.log(user);
```

- `const user = {...}` only locks the **variable** `user` from being pointed at a different object.
- It does NOT lock what's *inside* the object — `user.name = "Chidi"` is allowed, because we're changing a property, not replacing the whole object.
- `user = { name: "Tolu" }` (reassigning the whole thing) would still throw an error.

**Output:** `{ name: 'Chidi' }`

---

## PART 4: var (the old way)

```js
var old = "I still work, but I'm outdated";
console.log(old);
```

- `var` still works in modern JS, but it doesn't respect block scope the way `let`/`const` do (covered properly in the Scope lesson). That inconsistency causes bugs — always prefer `let`/`const`.

---

## PART 5: Naming rules

```js
let studentName = "Ade";
let studentAge = 20;
console.log(studentName, studentAge);
```

- Names can use letters, numbers, `_`, and `$` — but can't **start** with a number.
- Names are case-sensitive: `age` and `Age` are two different variables.
- Convention: use **camelCase** (`studentName`), not `student_name` or `StudentName`.

---

## PART 6: Try it yourself

Practice tasks — creating/changing a `let`, trying to reassign a `const`, and changing a property inside a `const` object. Students build and test these themselves.
