# 21 - Modifying Elements (Explained)

Matching file: `code/21-modifying-elements.html`

**Note:** runs in a browser — uncomment a block, save, then **refresh the page** to see the change.

---

## PART 1: textContent

```js
let title = document.getElementById("title");
title.textContent = "JavaScript Changed This Title!";
```

- `textContent` replaces an element's text with whatever you give it.
- It's the **safest** option — it treats everything as plain text, even if it looks like HTML tags (so you can't accidentally break the page).

---

## PART 2: innerHTML

```js
let description = document.getElementById("description");
description.innerHTML = "This is <strong>bold</strong> and <em>italic</em>!";
```

- Unlike `textContent`, `innerHTML` actually **builds new HTML elements** from the text you give it.
- Use this only when you genuinely need to insert real HTML tags — otherwise prefer `textContent`, since `innerHTML` can be a security risk if the text comes from an untrusted source (like user input).

---

## PART 3: innerText

```js
let description = document.getElementById("description");
description.innerText = "innerText respects visible styling, like hidden elements.";
```

- Similar to `textContent` for most beginner purposes.
- `innerText` is "visual-aware" — it respects things like `display: none`. For everyday use, `textContent` is slightly faster and more predictable, so it's the usual default.

---

## PART 4: setAttribute

```js
let photo = document.getElementById("photo");
photo.setAttribute("src", "https://via.placeholder.com/150");
photo.setAttribute("alt", "A placeholder photo set by JS");
```

- `setAttribute(attributeName, newValue)` changes any HTML attribute — `src`, `alt`, `href`, `placeholder`, `disabled`, and so on.

---

## PART 5: classList

```js
let box = document.getElementById("box");

box.classList.add("highlight");
console.log(box.classList.contains("highlight"));
```

- `.classList.add("highlight")` adds that CSS class to the element.
- `.classList.remove("highlight")` removes it.
- `.classList.toggle("highlight")` adds it if missing, removes it if already there — great for things like a dark-mode switch.
- `.classList.contains("highlight")` checks if the class is currently applied, returning `true`/`false`.

---

## Summary

1. `textContent` — changes plain text only (safest).
2. `innerHTML` — changes text AND can insert real HTML tags.
3. `innerText` — similar to textContent, but visual-aware.
4. `setAttribute(name, value)` — changes any HTML attribute.
5. `classList.add/remove/toggle/contains` — manage CSS classes on an element.
