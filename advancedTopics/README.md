---
theme: "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "Advanced Topics in React"
---

# Intro to React Workshop

---

## Heading 001

- Lorem
- Ipsum

note: this should not be visible

---

## Heading 002

Early in the development of any product, there are always questions on testing

note: All aimed at determining how we can build a framework of confidence around that product.
note: For mercury, we asked a few questions in quick succession

--

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
