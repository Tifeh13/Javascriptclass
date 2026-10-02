# 30 - Final Project: Mini Dashboard App (Explained)

Matching file: `code/30-final-project-dashboard.html`

**Note:** open in a browser, DevTools (F12) → Console, and actually use the page — type a task, click buttons, click "New Quote".

This project deliberately uses almost every topic from the whole course together. Here's how each section maps back to what was taught.

---

## Section 1: Data (Objects + Constructors)

```js
function Task(text) {
  this.text = text;
  this.done = false;
}

let tasks = [];
```

- `Task` is a constructor function — same pattern as the `Student` constructor from the Objects lesson.
- Every task built with `new Task(...)` gets its own `text` and `done` properties.
- `tasks` is an array that will hold many `Task` objects — exactly like the `students` array idea from earlier array lessons.

---

## Section 2: DOM selecting

```js
let quoteText = document.getElementById("quote-text");
let newQuoteBtn = document.getElementById("new-quote-btn");
...
```

- Every interactive piece of the page is grabbed ONCE at the top using `getElementById`, so the rest of the code can reuse these variables instead of re-selecting the same elements over and over.

---

## Section 3: Rendering tasks (createElement / appendChild)

```js
function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach(function (task, index) {
    let li = document.createElement("li");
    ...
    taskList.appendChild(li);
  });

  updateStats();
}
```

- `taskList.innerHTML = ""` clears the list first — the simplest way to keep what's on screen in sync with the `tasks` array.
- `.forEach()` loops through every task and builds a fresh `<li>` for each one, using the exact `createElement` + `appendChild` pattern from lesson 23.
- `dataset.index` and `dataset.action` store extra info directly on each button, so the click listener (Section 5) knows which task and which action to perform.
- `updateStats()` uses `.filter()` (an array method) to count how many tasks are marked done, and updates the stats line using a template literal.

---

## Section 4: Adding a task (events + validation)

```js
addTaskBtn.addEventListener("click", function () {
  let text = taskInput.value.trim();

  if (text === "") {
    alert("Please type a task first.");
    return;
  }

  tasks.push(new Task(text));
  taskInput.value = "";
  renderTasks();
});
```

- `.trim()` (Strings lesson) removes accidental leading/trailing spaces.
- The `if` check (Conditionals lesson) stops an empty task from being added.
- `tasks.push(new Task(text))` builds a new Task object and adds it to the array.
- `renderTasks()` is called again afterward to redraw the updated list.

The keydown listener for pressing Enter is a second, smaller event listener demonstrating that one element can respond to more than one kind of event.

---

## Section 5: Event delegation (done/delete buttons)

```js
taskList.addEventListener("click", function (event) {
  let index = event.target.dataset.index;
  let action = event.target.dataset.action;

  if (action === undefined) return;

  index = Number(index);

  if (action === "toggle") {
    tasks[index].done = !tasks[index].done;
  } else if (action === "delete") {
    tasks.splice(index, 1);
  }

  renderTasks();
});
```

- ONE listener on the parent `<ul>` (`taskList`) handles clicks on every Done/Delete button, current AND future — exactly the event delegation pattern from lesson 22.
- `event.target.dataset.index`/`.dataset.action` read back the values we attached in Section 3, so we know exactly which task and which action was clicked.
- `if (action === undefined) return;` guards against clicks that land on the `<li>` itself rather than a button.
- `!tasks[index].done` flips `true` to `false` or vice versa (the NOT operator from Operators lesson).
- `tasks.splice(index, 1)` removes exactly 1 item at that position from the array.

---

## Section 6: Fetch + async/await + destructuring + error handling

```js
async function loadQuote() {
  quoteText.textContent = "Loading...";

  try {
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();

    let { content, author } = data;

    quoteText.textContent = `"${content}" — ${author}`;
  } catch (error) {
    quoteText.textContent = "Could not load a quote right now. Try again!";
    console.log("Fetch error:", error.message);
  }
}
```

- `async`/`await`/`fetch`/`response.json()` are exactly the pattern from lessons 26–28.
- `let { content, author } = data;` is object destructuring (lesson 25) — pulling exactly the two fields needed straight out of the API's response.
- The template literal builds the final quote string cleanly.
- `try/catch` means a failed network request shows a friendly fallback message instead of crashing the whole page.

---

## Section 7: Startup

```js
tasks.push(new Task("Finish JavaScript course"));
tasks.push(new Task("Build the capstone project"));
renderTasks();
loadQuote();
```

- These 4 lines run once, the moment the page's `<script>` loads — seeding a couple of starter tasks, drawing the initial list, and kicking off the first quote fetch.

---

## Why this project works

Every piece connects to a lesson already taught: Objects/Constructors (task records) → Arrays (the task list, `.filter()`, `.splice()`) → Functions (render/validation logic) → Conditionals and Operators (validation, toggling) → DOM selecting/creating/removing → Event handling and delegation → Destructuring → Promises/async-await/fetch → Error handling. A student who can read through this whole file and explain every line has genuinely learned the course, not just copied examples.
