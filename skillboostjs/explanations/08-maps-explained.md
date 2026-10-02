# 08 - Maps (Explained)

Matching file: `code/08-maps.js`

---

## PART 1: What is a Map?

```js
let capitals = new Map();
capitals.set("Nigeria", "Abuja");
capitals.set("Ghana", "Accra");
capitals.set("Kenya", "Nairobi");

console.log(capitals);
console.log(capitals.get("Nigeria"));
```

- `new Map()` creates an empty map, stored in `capitals`.
- `.set(key, value)` adds one pair at a time. Here, the key is `"Nigeria"` and the value is `"Abuja"`.
- `console.log(capitals)` prints all pairs, IN THE ORDER they were added.
- `.get("Nigeria")` looks up that key and returns its matching value.

**Output:**
```
Map(3) { 'Nigeria' => 'Abuja', 'Ghana' => 'Accra', 'Kenya' => 'Nairobi' }
Abuja
```

---

## PART 2: Size, checking, and deleting

```js
let capitals = new Map();
capitals.set("Nigeria", "Abuja");
capitals.set("Ghana", "Accra");

console.log(capitals.size);
console.log(capitals.has("Ghana"));

capitals.delete("Ghana");
console.log(capitals);
```

- `.size` — how many pairs are in the map (like `.length` for arrays).
- `.has("Ghana")` — does this key exist? → `true`
- `.delete("Ghana")` — removes that one pair completely.

**Output:**
```
2
true
Map(1) { 'Nigeria' => 'Abuja' }
```

---

## PART 3: Looping through a Map

```js
let scores = new Map();
scores.set("Ade", 85);
scores.set("Chidi", 90);
scores.set("Tolu", 78);

for (let [name, score] of scores) {
  console.log(name + " scored " + score);
}
```

- `for (let [name, score] of scores)` visits every pair, and automatically splits each one into two variables: `name` (the key) and `score` (the value).

**Output:**
```
Ade scored 85
Chidi scored 90
Tolu scored 78
```

---

## PART 4: Map vs Object

- Object keys are usually plain text; Map keys can be ANY type (numbers, objects, even functions).
- Map always remembers the exact order items were added.
- Map has `.size` built in — a plain object needs `Object.keys(obj).length` to count its properties.

---

## PART 5: Try it yourself

Practice tasks — building a Map of scores, checking with `.has()`, looping through pairs. Students build and test these themselves.
