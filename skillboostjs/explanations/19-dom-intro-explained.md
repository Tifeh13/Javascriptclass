# 19 - DOM Manipulation Intro (Explained)

Matching file: `code/19-dom-intro.html`

**Note:** this one runs in a browser, not `node` — open the file, then open DevTools (F12) → Console tab to see output.

---

## PART 1: What is the DOM?

Think of a webpage as a family tree. `<html>` is the grandparent, `<body>` is a parent, and every `<h1>`, `<p>`, `<div>` inside it are children. That whole family tree, as JavaScript sees it, is called the **DOM** (Document Object Model).

JavaScript can use the DOM to reach into the page and read or change anything — text, colors, even create or delete whole elements.

---

## PART 2: "document" — your door into the page

```js
console.log(document);
```

- `document` represents the **entire webpage**.
- Every single thing you do to read or change the page starts with `document`.

---

## PART 3: A quick taste — changing text live

```js
let title = document.getElementById("main-title");
title.textContent = "JavaScript just changed me!";
```

- `document.getElementById("main-title")` finds the element whose `id="main-title"` in the HTML, and stores it in the variable `title`.
- `title.textContent = "..."` replaces that element's text.
- This happens **live, in the browser, without reloading the page** — that's the entire point of DOM manipulation. The next 2 lessons (Selecting, Modifying) cover `getElementById` and `textContent` properly.

---

## Summary

1. The DOM is the "family tree" of a webpage that JS can read and change.
2. `document` is how JS reaches into the page.
3. JS can change what's on screen live, without a page reload.
