# 02 - Object Path, Properties, Methods, this, Display, Constructors (Explained)

Matching file: `code/02-objects-more.js`

---

## TOPIC 1: Object Path

```js
let person = {
  name: "Ade",
  address: {
    city: "Ibadan",
    home: {
      street: "Oke-Ado",
      houseNumber: 12
    }
  }
};

console.log(person.address.home.houseNumber);  // 12
console.log(person.address.city);               // Ibadan
```

- Objects can live **inside** other objects — `address` is an object sitting inside `person`, and `home` is an object sitting inside `address`.
- To reach `houseNumber`, you follow the dots one at a time, like walking a path: `person` → `address` → `home` → `houseNumber`.
- Each dot means "go one level deeper."

**Output:**
```
12
Ibadan
```

---

## TOPIC 2: Object Properties

```js
let person = {
  firstName: "Ade",
  lastName: "Bello",
  age: 20
};

console.log(person.firstName + " is " + person.age + " years old.");
console.log(person["lastName"]);

let key = "age";
console.log(person[key]);
```

- Line 1: dot notation reads two properties and glues them into a sentence.
- Line 2: bracket notation, same result as `person.lastName`.
- Line 3: `key` holds the text `"age"`. `person[key]` becomes `person["age"]` — this is the main reason bracket notation exists: it lets a **variable** decide which property to grab.

**Output:**
```
Ade is 20 years old.
Bello
20
```

**Why bracket notation matters (2 real reasons):**
1. When the property name is stored in a variable (shown above).
2. When the property name has a space or dash in it, e.g. `car["car-brand"]` — dot notation can't read `car.car-brand`, it would break.

```js
let phone = { brand: "Samsung", price: 150000 };
phone.price = 140000;     // CHANGE
phone.color = "Black";    // ADD
delete phone.brand;       // DELETE
```
- `.price = 140000` replaces an existing value.
- `.color = "Black"` creates a brand-new property.
- `delete phone.brand` removes a property completely.

---

## TOPIC 3: Object Methods

```js
let person = {
  firstName: "Ade",
  lastName: "Bello",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());
console.log(person.fullName);
```

- `fullName` is a method — its value is a function.
- `return` hands back a value instead of printing it directly — that's why we still need `console.log()` around the call.
- `person.fullName()` — the `()` **runs** the function → prints `Ade Bello`.
- `person.fullName` (no brackets) just shows you the function's raw code — it does NOT run it.

---

## TOPIC 4: The `this` keyword

```js
let studentA = {
  name: "Ade",
  sayName: function () {
    console.log("I am " + this.name);
  }
};

let studentB = {
  name: "Chidi",
  sayName: studentA.sayName
};

studentA.sayName();  // I am Ade
studentB.sayName();  // I am Chidi
```

- `studentB.sayName` **borrows** the exact same function that `studentA` has.
- `this` is NOT fixed to whichever object the function was originally written in — it depends on **who calls it**.
- When `studentA` calls it, `this` = `studentA`, so `this.name` = `"Ade"`.
- When `studentB` calls it, `this` = `studentB`, so `this.name` = `"Chidi"`.

**Takeaway:** `this` is decided at the moment of the call, not at the moment the function was written.

---

## TOPIC 5: Object Display

```js
let person = { name: "Ade", age: 20 };

console.log(person);
console.log("Person: " + person);
console.log(JSON.stringify(person));
```

- `console.log(person)` prints the object nicely — this works fine.
- `"Person: " + person` tries to glue text with a whole object using `+`. JS doesn't know how to turn an object into readable text this way, so it prints the unhelpful `[object Object]`. **This is a very common beginner mistake.**
- `JSON.stringify(person)` properly converts the object into readable text, so joining it with `+` now works.

**Output:**
```
{ name: 'Ade', age: 20 }
Person: [object Object]
{"name":"Ade","age":20}
```

```js
let car = { brand: "Toyota", model: "Corolla", year: 2020 };

for (let key in car) {
  console.log(key + ": " + car[key]);
}
```
- `for (let key in car)` visits every key inside `car`, one at a time, storing the current key's NAME in the variable `key`.
- `car[key]` then uses bracket notation to fetch the actual value for that key.

**Output:**
```
brand: Toyota
model: Corolla
year: 2020
```

---

## TOPIC 6: Object Constructors

```js
function Student(name, age, course) {
  this.name = name;
  this.age = age;
  this.course = course;
  this.introduce = function () {
    console.log(this.name + " (" + this.age + ") is learning " + this.course);
  };
}

let student1 = new Student("Ade", 20, "JavaScript");
let student2 = new Student("Chidi", 22, "Python");

student1.introduce();
student2.introduce();
```

- `function Student(...)` is a **blueprint** — its capital letter signals "this is meant to build objects."
- `(name, age, course)` are placeholders that get filled in whenever the blueprint is used.
- `this.name = name` attaches a property onto whichever new object is currently being built.
- `new Student("Ade", 20, "JavaScript")` — `new` tells JS: "make a brand-new empty object, then run the Student function on it, using that new object as `this`."
- `student1` and `student2` are two completely separate objects built from the SAME blueprint, with different data.

**Output:**
```
Ade (20) is learning JavaScript
Chidi (22) is learning Python
```
