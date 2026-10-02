# 20 - Selecting Elements (Explained)

Matching file: `code/20-selecting-elements.html`

**Note:** runs in a browser — open the file, DevTools (F12) → Console tab.

---

## PART 1: getElementById

```js
let title = document.getElementById("title");
console.log(title);
```

- An `id` should be **unique** per page — only one element should ever have `id="title"`.
- `getElementById("title")` grabs that one specific element.

---

## PART 2: querySelector

```js
let firstParagraph = document.querySelector(".info");
console.log(firstParagraph);

let byId = document.querySelector("#title");
console.log(byId);
```

- `querySelector` uses the **same selector syntax as CSS**: `#id`, `.class`, or just `tagname`.
- It only ever grabs the **first** matching element — even though there are TWO paragraphs with class `"info"`, this only returns the first one.
- `"#title"` works the same way `getElementById("title")` does — just a different syntax.

---

## PART 3: querySelectorAll

```js
let allParagraphs = document.querySelectorAll(".info");
console.log(allParagraphs);

allParagraphs.forEach(function (p) {
  console.log(p.textContent);
});
```

- `querySelectorAll` grabs **every** matching element, returned as a list (technically a "NodeList").
- `.forEach()` loops through that list, running the function once per matched element — here, printing each paragraph's text.

**Output:**
```
This is paragraph one.
This is paragraph two.
```

---

## PART 4: Which one should you use?

- `getElementById` — fastest, but only works with ids.
- `querySelector` — most flexible, grabs the first match using any CSS selector.
- `querySelectorAll` — grabs every match, as a list you can loop through.

In modern JavaScript, `querySelector`/`querySelectorAll` are used the most because they understand any CSS selector, not just ids.

---

## Summary

1. `getElementById("id")` grabs ONE element by its unique id.
2. `querySelector("css-selector")` grabs the FIRST matching element.
3. `querySelectorAll("css-selector")` grabs ALL matching elements, as a loopable list.
