// ============================================================
// 29a. JAVASCRIPT MODULES - HELPER FILE (mathHelpers.mjs)
// ============================================================
//
// This file EXPORTS functions so another file can USE them.
// See 29b-modules-main.mjs for how to import and run this.
//
// IMPORTANT: Modules require the ".mjs" file extension (or a
// "type": "module" setting in package.json) for Node to
// understand import/export syntax. That's why this file ends
// in .mjs instead of .js.
// ============================================================


// ------------------------------------------------------------
// NAMED EXPORTS (you can export as many of these as you want)
// ------------------------------------------------------------

export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

export const PI = 3.14159;


// ------------------------------------------------------------
// DEFAULT EXPORT (only ONE allowed per file)
// ------------------------------------------------------------

export default function multiply(a, b) {
  return a * b;
}
