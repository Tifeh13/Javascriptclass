# 17 - Strings (Explained)

Matching file: `code/17-strings.js`

---

## PART 1: What is a string?

Any text wrapped in quotes. Single `'`, double `"`, and backtick `` ` `` quotes all work — backticks have a special superpower (next section).

```js
let a = 'Hello';
let b = "Hello";
let c = `Hello`;
console.log(a, b, c);
```

**Output:** `Hello Hello Hello`

---

## PART 2: Template literals (backticks)

```js
let name = "Ade";
let age = 20;

console.log("My name is " + name + " and I am " + age + " years old.");
console.log(`My name is ${name} and I am ${age} years old.`);
```

- The old way glues text together with `+` — easy to make mistakes with spacing and quote marks.
- The modern way uses backticks and `${ }` to drop a variable **directly inside** the text — cleaner and easier to read.
- Both lines print the exact same sentence.

**Output:**
```
My name is Ade and I am 20 years old.
My name is Ade and I am 20 years old.
```

---

## PART 3: Common string properties and methods

```js
let text = "Hello World";

console.log(text.length);            // 11
console.log(text.toUpperCase());     // HELLO WORLD
console.log(text.toLowerCase());     // hello world
console.log(text.includes("World")); // true
console.log(text.slice(0, 5));       // Hello
console.log(text.replace("World", "JS"));  // Hello JS
```

- `.length` — how many characters (including the space!).
- `.toUpperCase()` / `.toLowerCase()` — changes case, doesn't touch the original string.
- `.includes("World")` — checks if that exact text is somewhere inside.
- `.slice(0, 5)` — cuts from index 0 up to (but **not including**) index 5, giving you 5 characters: `H-e-l-l-o`.
- `.replace(old, new)` — swaps out the first match it finds.

---

## PART 4: Trimming and splitting

```js
let messy = "   hi there   ";
console.log(messy.trim());

let csv = "Ade,Chidi,Tolu";
let names = csv.split(",");
console.log(names);
```

- `.trim()` removes extra spaces from both ends only (not the middle).
- `.split(",")` turns one long string into an **array**, cutting it apart everywhere it sees a comma.

**Output:**
```
hi there
[ 'Ade', 'Chidi', 'Tolu' ]
```

---

## PART 5: Reading individual characters

```js
let word = "JavaScript";
console.log(word[0]);   // J
console.log(word[4]);   // S
```

- A string behaves a bit like an array of characters — each one has an index starting from 0.
- `word[0]` is the first character, `word[4]` is the fifth character.

---

## PART 6: Try it yourself

Practice tasks — string length/uppercase, a template literal sentence, and splitting a comma-separated list. Students build and test these themselves.
