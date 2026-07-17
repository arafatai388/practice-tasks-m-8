# 📘 Module 08: Conditionals & Decision Making

## 📖 Overview

This module focuses on decision-making in JavaScript using conditional statements and logical operators. It covers how to compare values, evaluate multiple conditions, and control the flow of a program using real-world examples and practice tasks.

---

## 🎯 Learning Objectives

After completing this module, I can:

- Compare values using comparison operators.
- Write conditional statements using `if`, `if...else`, and `if...else if`.
- Combine multiple conditions with logical operators.
- Use nested conditions to solve real-world problems.
- Write concise conditional expressions using the ternary operator.
- Build simple authentication and business logic programs.

---

# 📚 Topics Covered

- Comparison Operators
- Equality (`==`) vs Strict Equality (`===`)
- `if` Statement
- `if...else`
- `if...else if`
- Nested `if...else`
- Logical AND (`&&`)
- Logical OR (`||`)
- Logical NOT (`!`)
- Ternary Operator (`? :`)
- Decision Making

---

# ⚖️ Comparison Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Loose Equality | `"5" == 5` |
| `===` | Strict Equality | `"5" === 5` |
| `!=` | Not Equal | `a != b` |
| `!==` | Strict Not Equal | `a !== b` |
| `>` | Greater Than | `a > b` |
| `<` | Less Than | `a < b` |
| `>=` | Greater Than or Equal | `a >= b` |
| `<=` | Less Than or Equal | `a <= b` |

> **Best Practice:** Always prefer `===` and `!==` for reliable comparisons.

---

# 🔀 Conditional Statements

## if Statement

Executes a block of code only when the condition is `true`.

```javascript
if (isRaining) {
    console.log("Take an umbrella");
}
```

---

## if...else Statement

Executes one block if the condition is true; otherwise executes another.

```javascript
if (number > 0) {
    console.log("Positive");
} else {
    console.log("Negative");
}
```

---

## if...else if Statement

Used to evaluate multiple conditions.

```javascript
if (marks >= 80) {
    console.log("A+");
} else if (marks >= 70) {
    console.log("A");
} else if (marks >= 60) {
    console.log("B");
} else {
    console.log("F");
}
```

---

## Nested if...else

Used when one decision depends on another.

```javascript
if (age >= 18) {
    if (hasID) {
        console.log("Eligible to vote");
    } else {
        console.log("Please bring your ID");
    }
} else {
    console.log("Not eligible to vote");
}
```

---

# 🔗 Logical Operators

## AND (`&&`)

Returns `true` only when **all conditions are true**.

```javascript
if (age > 18 && hasTicket) {
    console.log("Entry allowed");
}
```

---

## OR (`||`)

Returns `true` when **at least one condition is true**.

```javascript
if (isWeekend || isHoliday) {
    console.log("No work today");
}
```

---

## NOT (`!`)

Reverses a boolean value.

```javascript
if (!hasPermission) {
    console.log("Access Denied");
}
```

---

# ⚡ Ternary Operator

A shorter alternative to a simple `if...else`.

### Syntax

```javascript
condition ? valueIfTrue : valueIfFalse;
```

### Example

```javascript
age >= 18
    ? console.log("Adult")
    : console.log("Minor");
```

---

# 💻 Practice Tasks Completed

- ✅ Compare two values using all comparison operators
- ✅ Check equality using `==` and `===`
- ✅ Rain checker
- ✅ Stock availability checker
- ✅ Positive / Negative number checker
- ✅ Leap year checker
- ✅ Speed checker
- ✅ Ticket verification system
- ✅ Weekend / Holiday checker
- ✅ Login authentication
- ✅ Grading system
- ✅ BMI category checker
- ✅ Season checker
- ✅ Voting eligibility checker
- ✅ Admin/User dashboard
- ✅ Even or Odd checker
- ✅ Adult or Minor checker
- ✅ Price checker using the ternary operator
- ✅ Permission checker
- ✅ Online / Offline checker
- ✅ Discount calculator
- ✅ Login + Role Management system

---

# 🌍 Real-World Applications

The concepts learned in this module can be used to build:

- Login Systems
- Authentication
- Role-Based Access Control
- Discount Calculators
- Voting Eligibility Checkers
- Student Grading Systems
- BMI Calculators
- Business Rule Validation

---

# ⚠️ Common Mistakes

### Using `=` instead of `===`

❌ Incorrect

```javascript
if (age = 18)
```

✅ Correct

```javascript
if (age === 18)
```

---

### Using `>==`

❌ Incorrect

```javascript
speed >== 80
```

✅ Correct

```javascript
speed >= 80
```

---

### Using `prompt()` in Node.js

`prompt()` is available in browsers only.

For Node.js, use the `readline` module to receive user input.

---

### Misspelled Variable Names

❌

```javascript
isOnloine
```

✅

```javascript
isOnline
```

---

# 💡 Best Practices

- Use `===` instead of `==`.
- Prefer descriptive variable names.
- Keep conditions simple and readable.
- Write clean, well-indented code.
- Use comments only when they improve clarity.
- Test different input values to verify program logic.

---

# 📝 Module Summary

This module introduced the fundamentals of decision-making in JavaScript. By completing the practice tasks, I learned how to evaluate conditions, combine logical expressions, control program flow, and solve practical programming problems using conditional statements.

---

## 📌 Skills Gained

- Comparison Operators
- Conditional Statements
- Nested Conditions
- Logical Operators
- Boolean Expressions
- Ternary Operator
- Problem Solving
- Basic Business Logic

---

## ✅ Module Status

**Completed ✔️**