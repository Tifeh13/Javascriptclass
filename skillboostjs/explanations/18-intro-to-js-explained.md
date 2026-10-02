# 18 - Introduction to JavaScript (Explained)

Matching file: `code/18-intro-to-js.js`

---

## PART 1: What is JavaScript?

Websites are usually 3 layers:
- **HTML** — the structure (skeleton: headings, buttons, text)
- **CSS** — the style (clothes: colors, layout, fonts)
- **JS** — the behavior (brain: makes things happen — clicks, calculations, loading data)

JavaScript is the only one of the three that can make a page actually **do** things and react to the user.

---

## PART 2: Where does JavaScript run?

1. **In the browser** (Chrome, Edge, etc.) — controls webpages (this is what the DOM lessons, 19–23, cover).
2. **On your computer directly, using Node.js** — this is what `node filename.js` has been doing in the terminal for every other lesson.

Same language, two different places it can run.

---

## PART 3: console.log()

```js
console.log("Hello, World!");
console.log(5 + 3);
console.log("This is how we check what our code is doing.");
```

- `console.log()` prints whatever you give it to the console/terminal.
- It's the single most-used tool for checking what your code is actually doing while you write it.

**Output:**
```
Hello, World!
8
This is how we check what our code is doing.
```

---

## PART 4: Comments

```js
console.log("This line runs"); // this part is ignored by JS
// console.log("This whole line is commented out, so it NEVER runs");
```

- `//` starts a single-line comment — JS ignores everything after it on that line.
- `/* ... */` wraps a multi-line comment — JS ignores everything between the two markers, **no matter how many lines it spans** (this is exactly the bug we debugged earlier with the media query CSS file!).
- Comments are notes for humans, not instructions for the computer.

---

## PART 5: Statements and semicolons

```js
let a = 5;
let b = 10;
console.log(a + b);
```

- Each instruction is called a **statement**, usually ending in a semicolon `;` — like a full stop in English.
- JS can sometimes work without semicolons, but it's best practice to always include them to avoid subtle bugs.

**Output:** `15`

---

## PART 6: Try it yourself

Practice tasks — printing your name, doing a multiplication, and writing both comment styles. Students build and test these themselves.
