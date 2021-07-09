---
theme: "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "Advanced Topics in React"
---

# Advanced React Workshop

---

## What Will We Discuss?

1. Hooks
2. Routing
3. React Ecosystem
4. UI Testing

note: this should not be visible

---

## Hooks

What are hooks?
  - A way to encapsulate and reuse logic between components.
  - There are built in hooks in React (useState, useEffect, useReducer).
  - As well as the opportunity to build your own!

---

## The Rules of Hooks

How to use hooks?
  - Hooks are just JavaScript functions but there are 2 rules you should follow when using them.
  - Only call hooks at the top level not inside loops or where code is heavily nested.
  - Only call a hook within a react functional component or within a custom hook.
  - It is common practice to prefix a hook with 'use'.

note: calling hooks at the top level ensures state is preserved between component re-renders
note: calling hooks within React FC's ensures logic is clearly separated from the component

---

### Demo Time

note: advancedTopics/examples/customHooks contains the practical demo for this slide

---
## Heading 002

Early in the development of any product, there are always questions on testing

note: All aimed at determining how we can build a framework of confidence around that product.
note: For mercury, we asked a few questions in quick succession

---

### Heading 003

> Write automation tests, duh. {.fragment .fade-down}

---

### Heading 004

```ts{.fragment .fade-down}

describe('The scenario our unit is being tested under', () => {

  beforeEach(() => {
    // Given some pre-conditions

    // When some action occurs
  })

  it('should display some behaviour', () => {
    // Then...
    expect(thing).toHaveBeenCalledWith();
  })

});

```

note: Link to the example in code maybe?
