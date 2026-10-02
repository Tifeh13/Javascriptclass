# 22 - Event Handling (Explained)

Matching file: `code/22-event-handling.html`

**Note:** runs in a browser — open DevTools (F12) → Console, then actually **click** the buttons/type in the input to see events fire.

---

## PART 1: What is an event?

Something that HAPPENS on the page — a click, a key press, typing in a box, the mouse moving, the page loading, and so on. JavaScript can "listen" for these and react.

---

## PART 2: addEventListener

```js
let button = document.getElementById("greet-btn");

button.addEventListener("click", function () {
  console.log("Button was clicked!");
});
```

- `addEventListener(eventType, functionToRun)` attaches a listener to an element.
- `"click"` is the event type we're watching for.
- Whenever that event happens on this specific element, the function runs.
- **Important:** this only works if you actually click the button on the page — it won't fire on its own.

---

## PART 3: The event object

```js
let input = document.getElementById("name-input");

input.addEventListener("input", function (event) {
  console.log("You typed: " + event.target.value);
});
```

- The function we pass to `addEventListener` automatically receives an **event object** as its first argument — here we named it `event`.
- `event.target` is the exact element the event happened ON.
- `.value` reads that element's current text content.
- `"input"` fires on **every single keystroke**, not just when you finish typing.

---

## PART 4: Common event types

- `"click"` — element was clicked
- `"input"` — text box content changed (fires on every keystroke)
- `"submit"` — a form was submitted
- `"mouseover"` — mouse moved onto an element
- `"keydown"` — a key was pressed down

---

## PART 5: Event delegation

```js
let list = document.getElementById("task-list");

list.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});
```

- Instead of adding a separate listener to EVERY delete button individually (which breaks if new buttons are added later), we add **ONE** listener on the parent `<ul>`.
- `event.target` tells us exactly which child element was actually clicked.
- `event.target.classList.contains("delete-btn")` checks: was it specifically a delete button that got clicked?
- `.parentElement` grabs the `<li>` that button sits inside.
- `.remove()` deletes that whole `<li>` from the page.
- This ONE listener handles clicks on ALL current AND future delete buttons — that's the power of event delegation.

---

## Summary

1. An event is something that happens on the page.
2. `addEventListener(eventType, function)` listens for and reacts to events.
3. The event object tells us details, like `event.target` (the element it happened on).
4. Event delegation = listening on a PARENT instead of every child, using `event.target` to check which child was involved.
























# 22 - Event Handling (Explained)

Matching file: `code/22-event-handling.html`

**Note:** runs in a browser. Open DevTools (F12) → Console, then actually **click** the buttons/type in the input to see events fire.

---

## PART 1: What is an event?

An event is something that HAPPENS on the page: a click, a key press, typing in a box, the mouse moving, the page loading, and so on. JavaScript can "listen" for these and react.

Think of a doorbell. Nothing happens until someone presses it. When the press happens (the event), the bell rings (your code runs). JavaScript events work the same way: your code waits quietly until something happens.

Examples of events in everyday websites:
- Clicking "Add to cart"
- Typing in a search box and seeing suggestions appear
- Hovering over a menu to open it
- Submitting a login form

---

## PART 2: addEventListener

```js
let button = document.getElementById("greet-btn");

button.addEventListener("click", function () {
  console.log("Button was clicked!");
});
```

- `document.getElementById("greet-btn")` finds the button on the page and stores it in `button`.
- `addEventListener(eventType, functionToRun)` attaches a listener to an element.
- `"click"` is the event type we are watching for.
- Whenever that event happens on this specific element, the function runs.
- **Important:** this only works if you actually click the button on the page. It won't fire on its own.

How it works:

```
Page loads        →  listener is attached, nothing runs yet
User clicks       →  the function runs
User clicks again →  the function runs again
```

**Output (in the Console, after each click):**
```
Button was clicked!
Button was clicked!
```

- Each click prints one line. Click 3 times, see 3 lines.
- The function you pass in is called a "callback". It is just a function that runs later, when the event happens.

---

## PART 3: The event object

```js
let input = document.getElementById("name-input");

input.addEventListener("input", function (event) {
  console.log("You typed: " + event.target.value);
});
```

- The function we pass to `addEventListener` automatically receives an **event object** as its first argument. Here we named it `event`.
- `event.target` is the exact element the event happened ON.
- `.value` reads that element's current text content.
- `"input"` fires on **every single keystroke**, not just when you finish typing.

How it works if you type "Ade" one letter at a time:
- Type `A` → `event.target.value` = "A"
- Type `d` → `event.target.value` = "Ad"
- Type `e` → `event.target.value` = "Ade"

**Output (in the Console):**
```
You typed: A
You typed: Ad
You typed: Ade
```

- You can pick any name instead of `event`. `e` is very common, but `event` is the clearest.
- The event object is created by the browser for you. You don't make it yourself, you just receive it.

---

## PART 4: Common event types

- `"click"`: element was clicked
- `"input"`: text box content changed (fires on every keystroke)
- `"submit"`: a form was submitted
- `"mouseover"`: mouse moved onto an element
- `"keydown"`: a key was pressed down

Examples:

```js
button.addEventListener("mouseover", function () {
  console.log("Mouse is on the button");
});

document.addEventListener("keydown", function (event) {
  console.log("You pressed: " + event.key);
});
```

- The first one runs when you move your mouse over the button.
- The second one runs when you press any key. `event.key` tells you which key it was, for example `a` or `Enter`.
- The pattern is always the same: element → `addEventListener` → event type → function.

---

## PART 5: Event delegation

```js
let list = document.getElementById("task-list");

list.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-btn")) {
    event.target.parentElement.remove();
  }
});
```

- Instead of adding a separate listener to EVERY delete button individually (which breaks if new buttons are added later), we add **ONE** listener on the parent `<ul>`.
- `event.target` tells us exactly which child element was actually clicked.
- `event.target.classList.contains("delete-btn")` checks: was it specifically a delete button that got clicked?
- `.parentElement` grabs the `<li>` that button sits inside.
- `.remove()` deletes that whole `<li>` from the page.
- This ONE listener handles clicks on ALL current AND future delete buttons. That is the power of event delegation.

Example HTML for this code:

```html
<ul id="task-list">
  <li>Buy bread <button class="delete-btn">X</button></li>
  <li>Read notes <button class="delete-btn">X</button></li>
  <li>Call Tolu <button class="delete-btn">X</button></li>
</ul>
```

How it works when you click the X next to "Read notes":
- The click happens on the button, then "bubbles up" to the `<ul>`, where our one listener is waiting.
- `event.target` is that exact button.
- Does it have the class `delete-btn`? Yes → continue.
- `event.target.parentElement` is the `<li>` containing it.
- `.remove()` deletes "Read notes" from the page.

What if you click on the text "Buy bread" instead of the button?
- The listener still runs, because the click reached the `<ul>`.
- But `event.target` is the `<li>`, which does NOT have the class `delete-btn`.
- The `if` is false, so nothing is deleted.

Think of a school gate with one security officer. Instead of placing a guard at every classroom door, one officer at the main gate checks everyone who comes through. New students can arrive tomorrow and the same officer handles them too.

---

## Cheat sheet

- `element.addEventListener("click", function () { })` → run code when the event happens
- `function (event) { }` → the browser passes in the event object automatically
- `event.target` → the exact element the event happened on
- `event.target.value` → the current text of an input box
- `event.key` → which key was pressed (for `keydown`)
- `event.target.classList.contains("name")` → check if the element has a certain class
- `.parentElement` → the element that contains the current one
- `.remove()` → delete an element from the page
- Event delegation → ONE listener on the parent, use `event.target` to find the child

---

## Summary

1. An event is something that happens on the page.
2. `addEventListener(eventType, function)` listens for and reacts to events.
3. The event object tells us details, like `event.target` (the element it happened on).
4. Event delegation = listening on a PARENT instead of every child, using `event.target` to check which child was involved.

---

## PART 6: Try it yourself

Practice tasks. Build and test these yourself:

1. **Click listener:** Add a button to your page and print `"Clicked!"` to the Console each time it is clicked.
2. **Change text:** Make the button change the text of a `<p>` element when clicked. (Hint: `paragraph.textContent = "New text"`.)
3. **Live typing:** Add an input box and print what the user has typed after every keystroke using `event.target.value`.
4. **Mouseover:** Print `"Mouse is here"` when the mouse moves over a heading.
5. **Delegation:** Create a `<ul>` with 3 items, each with a delete button. Use ONE listener on the `<ul>` so that clicking a delete button removes its `<li>`.

**Bonus challenge:** Add an "Add task" button and an input box that create a NEW `<li>` with its own delete button when clicked. Then check that the new delete buttons also work without adding any new listeners. (Hint: this is exactly why event delegation is useful.)