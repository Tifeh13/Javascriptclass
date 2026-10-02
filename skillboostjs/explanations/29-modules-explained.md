# 29 - JavaScript Modules (Explained)

Matching files: `code/29a-modules-mathHelpers.mjs` and `code/29b-modules-main.mjs`

**Note:** both files must stay in the same folder together, and must be run with `node 29b-modules-main.mjs` (the `.mjs` extension is required for `import`/`export` to work in Node).

---

## PART 1: What is a module?

Like splitting one huge textbook into separate chapters — each chapter can be read on its own, but they can also reference each other. A **module** is one JS file that can share (`export`) pieces of itself with other files, and use (`import`) pieces from other files. This keeps big projects organized instead of one giant messy file.

---

## The helper file (29a) — exporting

```js
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;

export default function multiply(a, b) {
  return a * b;
}
```

- `export function add(...)` and `export function subtract(...)` are **named exports** — a file can have as many of these as it wants.
- `export const PI = 3.14159` exports a plain value the same way.
- `export default function multiply(...)` is the **default export** — only ONE of these is allowed per file.

---

## PART 2: Importing named exports

```js
import { add, subtract, PI } from "./29a-modules-mathHelpers.mjs";

console.log(add(5, 3));        // 8
console.log(subtract(5, 3));   // 2
console.log(PI);                // 3.14159
```

- The `{ }` here must match the EXACT names that were exported in the other file.
- The relative path `"./29a-modules-mathHelpers.mjs"` tells Node exactly which file to pull these from.

---

## PART 3: Importing a default export

```js
import multiply from "./29a-modules-mathHelpers.mjs";

console.log(multiply(4, 5));   // 20
```

- No `{ }` needed for a default import.
- You can name it ANYTHING you like on this side — it doesn't have to match the original function's name.

---

## PART 4: Importing both named and default together

```js
import multiply, { add, subtract, PI } from "./29a-modules-mathHelpers.mjs";
```

- The default import comes first (no braces), followed by a comma, then the named imports in `{ }`.

---

## PART 5: Renaming an import with "as"

```js
import { add as sum } from "./29a-modules-mathHelpers.mjs";

console.log(sum(10, 5));   // 15
```

- Useful when the imported name would clash with something you already have, or just to make it clearer in your own file.

---

## PART 6: Named vs default exports — when to use which

- Use **named** exports when a file shares SEVERAL related things (a toolbox of functions).
- Use a **default** export when a file's whole purpose is to provide ONE main thing.
- A file can have both at once, exactly like `29a-modules-mathHelpers.mjs` does.

---

## Summary

1. A module is one JS file that can export pieces of itself for other files to import and use.
2. `export function name() {}` or `export const x = ...` are NAMED exports — import with matching names in `{ }`.
3. `export default ...` is ONE main export per file — import it WITHOUT `{ }`, and rename it freely.
4. `import { x as y }` lets you rename an import.
5. Node requires the `.mjs` extension (or `package.json` `"type": "module"`) to use import/export syntax.
