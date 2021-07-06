---
theme: "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "Intro to React Workshop"
---

# Intro to React

---

## What is React?

A front-end framework with a heavy focused on: {.fragment .fade-down}
  - Composition of Components {.fragment .fade-down}
  - Developer Experience {.fragment .fade-down}


note: Amongst other things of course!

---

## Composition of Components

Or
> Components made of other Components {.fragment .fade-down}

Because of this React development is all about: {.fragment .fade-down}
- Small components {.fragment .fade-down}
- Re-usable components {.fragment .fade-down}
- Self-contained components {.fragment .fade-down}
 
note: Much of React development is about designing and implementing 'Components'
note: self-contained little packets of re-usable code.
note: The composition of components simply refers to the idea that you can declaritively use one component in another


---

### Developer Experience

- Support for multiple programming paradigms  {.fragment .fade-down}
- Browser Developer Tools {.fragment .fade-down}
- Quickstart toolchains {.fragment .fade-down}
- A whole world of open source goodness {.fragment .fade-down}
  - State Management {.fragment .fade-down}
  - Testing utilities {.fragment .fade-down}
  - Component Libraries! {.fragment .fade-down}

note: Being a framework primarily for the development of Facebook, there is a vested interest in ensuring productiveity
note: There is great tooling, and solid principles surrounding React.
note: From Browser development tools, to supporting multiple programming paradigms, to other open source toolings, React really can be nice to work with.

---

## How do i start?

Use a quickstart tool! {.fragment .fade-down}

> create-react-app {.fragment .fade-down}

It's as easy as: {.fragment .fade-down}
```sh {.fragment .fade-down}
npx create-react-app app-name
```

note: you will need to have Node.js installed (with npm)
note: https://nodejs.org/en/ is a great place to start
note: node version manager (nvm) is a really valuable tool to use https://github.com/nvm-sh/nvm

---

## How do i start?

Tools like `create-react-app` will generate a bunch of code for you!

```sh
super-mega-app
├── README.md
├── package.json
├── public
├── src
│   ├── App.css     # default CSS applied to the app component
│   ├── App.js      # An initial Component that is set up
│   ├── App.test.js # A test file for the app component
│   ├── index.css   # base CSS applied globally
│   ├── index.js    # the 'root' of the whole app!
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
└── yarn.lock
```

---

### Demo Time!

note: introTopics/examples/createReactApp contains the practical demo for this slide

---

## What is a component?

- A self-contained and reusable bit of code {.fragment .fade-down}
- a discrete aspect of the app {.fragment .fade-down}
  - A Submit Button {.fragment .fade-down}
  - A Table of Results {.fragment .fade-down}
  - A Section of a Form {.fragment .fade-down}

---

## What is a component?

A really small component could be a `hello world` header

```jsx {.fragment .fade-down}
import React from 'react'

const SimpleComponent = () => {
  return (
    <h1>Hello World!</h1>
  )
}

export default SimpleComponent;
```

---

## What is a component?

Components can be used inside of other components!

```jsx {.fragment .fade-down}
import React from 'react';
import SimpleComponent from './SimpleComponent';

const ComponentList = () => {
  return (
    <li>
      <SimpleComponent />
      <SimpleComponent />
      <SimpleComponent />
    </li>
  )
}

export default ComponentList;
```

---

## What is a component?

Components can have `props`

(Similar to a HTML element's attributes)

```jsx {.fragment .fade-down}
import React from 'react'

const ComponentWithProps = (props) => {
  const { name } = props;
  return (
    <h1>Hello {name}!</h1>
  )
}

export default ComponentWithProps;
```

---

## What is a component?

You can then pass `props` into a component

```jsx {.fragment .fade-down}
import React from 'react';
import ComponentWithProps from './ComponentWithProps';

const ComponentList = () => {
  return (
    <li>
      <ComponentWithProps name="Jack" />
      <ComponentWithProps name="Paul" />
      <ComponentWithProps name="Kate" />
    </li>
  )
}

export default ComponentList;
```

---

### Demo Time!

note: introTopics/examples/whatIsAComponent contains the practical demo 'What is a component' 

---

## Component State

- State within react is just data. {.fragment .fade-down}
- Often used to make components dynamic {.fragment .fade-down}
- Properties that control behaviour{.fragment .fade-down}

---

## Component State

Examples of state:
- Number of times a button is clicked {.fragment .fade-down}
- Name of a person typed into a form {.fragment .fade-down}
- The time that the next train arrives {.fragment .fade-down}