# 23 - Creating and Removing Elements (Explained)

Matching file: `code/23-creating-removing-elements.html`

**Note:** runs in a browser — uncomment a block, save, then **refresh** to see the result.

---

## PART 1: createElement

```js
let newItem = document.createElement("li");
newItem.textContent = "Mango";
console.log(newItem);
```

- `createElement("li")` builds a brand-new `<li>` element in JS's memory.
- **Important:** it is NOT on the page yet! This is like building a toy but not placing it on the shelf — it exists, but nobody can see it.

---

## PART 2: appendChild

```js
let list = document.getElementById("fruit-list");

let newItem = document.createElement("li");
newItem.textContent = "Mango";

list.appendChild(newItem);
```

- `.appendChild(element)` places the new element as the **last child** inside `list`.
- NOW it actually shows up on the page. This is the 2-step pattern you'll use constantly: build it with `createElement`, then place it with `appendChild`.

---

## PART 3: Adding multiple elements with a loop

```js
let list = document.getElementById("fruit-list");
let moreFruits = ["Orange", "Grape", "Pineapple"];

moreFruits.forEach(function (fruit) {
  let item = document.createElement("li");
  item.textContent = fruit;
  list.appendChild(item);
});
```

- For each fruit in the array, we repeat the same 2-step pattern: build a new `<li>`, give it text, append it.
- `.forEach()` runs this process once per item in the array, automatically.

---

## PART 4: removeChild

```js
let list = document.getElementById("fruit-list");
let firstItem = list.firstElementChild;

list.removeChild(firstItem);
```

- `.firstElementChild` grabs the first `<li>` currently inside `list`.
- `removeChild(childElement)` removes that one specific child — but notice it's called **on the parent** (`list`), naming which child to remove.

---

## PART 5: .remove() (the modern way)

```js
let list = document.getElementById("fruit-list");
let firstItem = list.firstElementChild;

firstItem.remove();
```

- `.remove()` is called **directly on the element** you want gone — no need to go through its parent at all.
- This is the simpler, modern way most developers use today instead of `removeChild`.

---

## Summary

1. `createElement("tag")` builds a new element — but it's NOT on the page yet.
2. `appendChild(element)` actually places it onto the page, as the last child of a chosen parent.
3. `removeChild(childElement)` removes a specific child — called on the parent.
4. `.remove()` is the simpler modern way — called directly on the element you want gone.
