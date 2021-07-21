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
2. Higher Order Components
3. Error Boundaries
4. Minimising Re-renders
5. Controlled vs Uncontrolled Components
6. Lazy Loading

note: There are so many things we could cover. State Management, Forms, React Patterns. Unfortunately there is only so much time! We picked these topics as they led on quite nicely from the 'intro' topics. If anyone thinks it would be useful to have dedicated sessions on things like State Management, or such things, then do say! we are happy to run more sessions.

note: When we look at hooks, we're gonna demonstrate how and where to use the most common ones you will come across. There will be code examples you can use as reference moving forward.

note: when we look at tooling we're going to cover some tools which help you develop and maintain a React application, including Storybook, Prettier, ESLint and React Developer Tools

---

## Hooks

1. What are hooks?
2. useState
3. useRef
4. useEffect
5. useContext
6. Creating a custom hook

---

## What are Hooks?
  - They provide a means of re-using stateful logic across components

  - React has a small set of hooks built-in
  
  - You can even create your own!

---

## The Rules of Hooks

  Rule 1: Only call a hook within a react component or custom hook.
  
  Rule 2: Only call hooks at the top level scope of a component.
  
  Rule 3: custom hooks should always begin with `use`.


note: Hooks are just JavaScript functions but there are 2 rules you should follow when using them.
note: calling hooks at the top level ensures state is preserved between component re-renders
note: calling hooks within React FC's ensures logic is clearly separated from the component

---

## useState

- When you need a component with state

- When your component needs to update when the state changes


note: For anyone that was at the 'intro'. the useState hook was shown there! here we're gonna quickly go through it again. If you haven't used it before, then hopefully this will be a good introduction to it.

---

## useState - Example

```jsx
import { useState } from 'react'

export const UseState = () => {  
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}
```

note: lets look at a simple component that utilises the useState hook.

---

## useState - breakdown
useState has 3 elements:
1. A default value parameter

2. the current value of the 'state'

3. a method to update the current value of the 'state'

```jsx
const [currentValue, setValue] = useState(defaultValue);
```

note: useState initialises a 'State' variable
note: the 'state variable' will persist between renders of the component
note: the useState function returns a pair of things
note: the first thing in the tuple is the 'current value' of the state variable
note: the second thing in the tuple is a means of updating the value of the state variable

---

## useState - reading state

you can use the currentValue like any other variable in your component.
```jsx
const [currentValue, setValue] = useState(defaultValue);
```


```html
<p>the state's curent value is: {currentValue}</p>
```

---

## useState - updating state

To update the state varaible, you can just call the reurned function!
```jsx
const [currentValue, setValue] = useState(defaultValue);
```

Setting it to something new:
```
setValue({ foo: 'some object' })
```

Setting it to something based on the current state:
```
setValue(curentValue + 1)
```

note: whenever the method to update the state variable is called, React will re-render the component for you. The next time the component renders, the current value of the state variable will be whatever you set it to be

---

Demo Time!

note: ./advancedTopics/examples/built-in-hooks
note: Look at the state example!

---

## useRef

- Use when you want to track changes made to a DOM node

- Use when you want a mutable variable to persist across re-renders

- Use when you don't want a component to re-render when the value changes

---

## useRef - Example

```
import { useRef } from "react";

export const UseRef = () => {
  const inputEl = useRef<null | HTMLInputElement>(null);

  const onButtonClick = () => {
    inputEl.current?.focus();
  };
  
  return (<>
    <input ref={inputEl} type="text" />
    <button onClick={onButtonClick}>Submit</button>
  </> );
}
```

note: here is an example component that will 'focus' the input being referenced.

note: 'useRef' returns an object that has a 'current' property.

note: we are initialising a 'null' ref here. the empty ref us then being provided to the 'input' element.

note: react will automatically update the 'current' attribute of the ref

note: the on-click handler here will make use of the 'current' property from the 'ref'

---

## useRef -- Breakdown

```jsx
const inputEl = useRef<null | HTMLInputElement>(null);
```

You can read the current value of the reference by:
```jsx
inputEl.current
```

You can update the current value of the reference by:
```jsx
inputEl.current = 'some new value'
```

note: if you wanted to use the useRef hook for general data, you can read and update the value of the ref by accessing or updating the `current` property of it.

---

## Demo Time!

note: ./advancedTopics/examples/built-in-hooks

---

## useEffect

---

## useEffect - Example

---

## useContext

---

## useContext - Example

---

### Demo Time

note: advancedTopics/examples/customHooks contains the practical demo for this slide

---

