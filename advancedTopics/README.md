---
theme: "night"
customTheme: "our-theme"
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
3. Error Boundaries'
4. Minimising Re-renders
5. Controlled vs Uncontrolled Components
6. Lazy Loading

note: There are so many things we could cover. State Management, Forms, React Patterns. Unfortunately there is only so much time! We picked these topics as they led on quite nicely from the 'intro' topics. If anyone thinks it would be useful to have dedicated sessions on things like State Management, or such things, then do say! we are happy to run more sessions.

note: When we look at hooks, we're gonna demonstrate how and where to use the most common ones you will come across. There will be code examples you can use as reference moving forward.

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

A hook to let you perform some side-effect when a component renders
- Can perform an action on intitial render
- Can perfom an action conditionally on state changes

note: a good example of some side effect a component might make is fetching data from some API
note: it might do this once on initial render, or it might do it on each render if some thing has changed

---

## useEffect - Example

```jsx
import { useEffect, useState } from "react";

export const DataDisplayer = () => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => setData(JSON.stringify(json))
  }, []);

  return <div>{ data ? data : loading... }</div>
};

```

---

## useEffect - Breakdown

The useEffect hook takes 2 things
1. An 'effect' callback
2. A Dependencies Array

```js
useEffect(() => {
  // Some side effect
}, [ ... ]);
```

---

## useEffect - Breakdown

All `useEffects` will be evaluated each time your component renders. {.fragment .fade-down}

Not every effect will actually be applied though!  {.fragment .fade-down}

Whether a hook runs or not is determined by the dependencies array  {.fragment .fade-down}

---

## useEffect - Breakdown

- This effect will be applied once, on initial render  {.fragment .fade-down}
```jsx {.fragment .fade-down}
useEffect(() => {}, [])
```

- This effect will be applied whenever the pageNumber variable changes {.fragment .fade-down}
```jsx {.fragment .fade-down}
useEffect(() => {}, [pageNumber])
```

---

## useEffect - Cleanup

Some side-effects can cause memoryleaks or errors:

Attempting to update the state of an unmounted component {.fragment .fade-down}

React provides a mechanism to 'clean up' useEffects {.fragment .fade-down}

---

## useEffect - Cleanup Example

```jsx
useEffect(() => {
  API.subscribeToChanges();

  return () => API.unsubscribeFromChanges()
}, [])
```

note: the function you return from an effect will be called when a component unmounts
note: It will also 'cleanup' before a particular effect runs again. You could use this to reset some state before making an API request

---

### Demo Time
note: ./advancedTopics/examples/built-in-hooks contains the practical demo for this slide

---

## useContext

This hook provides a means of making things available to all components in a tree

Context is typically composed of: {.fragment .fade-down}
- State {.fragment .fade-down}
- Actions {.fragment .fade-down}

note: You can think of it as some global space that all child components will be able to interact with.

---

## useContext - Example

The useContext hook involves 3 things:
1. Creating a Context {.fragment .fade-down}
2. A Context Provider {.fragment .fade-down}
3. A Context Consumer {.fragment .fade-down}

---

## useContext - Example

Creating A Context:

```js
import { createContext } from 'react'

export const SomeContext = createContext( ... );
```

note: The context is exported so tha it can be used in the consumer of the context in the `useContext` hook.

note: the createContext method takes an initial state, similar to the useState hook.

note: the createContext method is not a hook, and is generally used outside of a component.

---

## useContext - Example

A Context Provider:

```jsx
export const SomeComponent = () => {
  return (
    <SomeContext.Provider value={ ... }>
      <ChildComponent />
      <AnotherChild />
    </SomeContext.Provider>
  );
}
```

note: The context that was created will have a `Provider` property which is essentially another react component. You can give it a `value` that represents the `context` which is available to anything consuming it.

---

## useContext - Example

A Context Consumer

```jsx
import { SomeContext } from '../SomeContext';

const ContextConsumer = () => {
  const context = useContext(SomeContext); 

  return <div>{context.someValue}</div>;
}

```

note: the consumer of the context utilises the 'useContext' hook and provides the context which it wants to use.

note: The implementation of this component now means that it must be used in a component tree wrapped by the Context provider.

note: It is common practice to extract the 'Provider' and 'useContext' methods into their own Provider Component and customer hook.

note: React Hook Forms is a really good example of this in practice.

---

### Demo Time

note: ./advancedTopics/examples/UseContextSimple has a small context example
note: ./advancedTopics/examples/UseContext has a more weaponised example

---

### Demo Time

note: advancedTopics/examples/customHooks contains the practical demo for this slide

---

## Higher Order Components

1. What are Higher Order Components?
2. What are they used for?
3. Enhancing a Component
4. Injecting into a Component

---

## What are Higher Order Components?
  - A Higher Order Component (HOC) is a technique for reusing component logic

  - A Higher Order Component is a function which takes a component and returns a new component
  
```jsx
const ComposedComponent = higherOrderComponentFunction(WrappedComponent);
```

note: Transforms a component into another component as opposed to a component which transforms props into UI

---

## What are they used for?

  - Abstracting out and sharing logic across Components

  - Abstraction without mutation or duplication

note: The wrapped Component's implementation isn't changed or copied in anyway, the wrapped component is simply composed by the Higher Order Component.

note: The Higher Order Component doesn't care about how the implementation is going to be used and the Wrapped Component doesn't care where the implementation came from

---

## Enhancing a Component

One use of a Higher Order Component is to enhance a component with more functionality.

For example, enhancing with loading functionality

```jsx
export const HelloWorld = (props: HelloWorldProps) => <h1>Hello World!</h1>;

// Adds an additional loading prop along with loading functionality
export const HelloWorldWithLoader = withLoader(HelloWorld);

<HelloWorldWithLoader loading={true} />

```

---

## Injecting into a Component

Another common use is to inject a component with functionality.

For example, adding a Counter to an existing component

```jsx

export const DisplayField = ({ value }: DisplayFieldProps) => 
  <span>{value}</span>;

// asCounter injects value into the DisplayField component
const DisplayFieldWithCounter = asCounter(DisplayField);

<DisplayFieldWithCounter />

```

---

## Demo Time!

note: ./advancedTopics/examples/advanced-patterns/src/components/HigherOrderComponentExamples

---

## Error Boundaries

1. What are Error Boundaries?
2. What are they not used for?
3. Defining an Error Boundary
4. Using Error Boundaries

---

## What are Error Boundaries?

 - Error Boundaries are components that catch JavaScript errors
 - They catch errors thrown anywhere in the child component tree
 - Caught errors can be logged and a fallback UI is displayed
 - Act as a declarative approach to try/catch

---

## What are they not used for?

  - Error Boundaries do not catch errors thrown:
    - By Event Handlers
    - By Asynchronous Code
    - During Server Side Rendering
    - In the Boundary itself

note: Errors thrown by event handlers and Async Code don't happen during rendering, so React doesn't need Boundaries as it still knows what to render

note: Use regular try/catches for these

---

## Defining an Error Boundary

An error boundary is a class component that defines one or both of the following lifecycle methods:
  - `static getDerivedStateFromError`
  - `componentDidCatch`

note: there is no functional equivalent of an Error Boundary, an example of where Class components are still used

note: getDerivedStateFromError allows you to update state to show a fallback UI

note: componentDidCatch gives you the opportunity to act on the error, e.g. log it

---

## Using Error Boundaries

  - Error Boundaries can be nested
  - Errors thrown will be caught by the nearest parent Boundary
  
note: generally you'll have one top level boundary that will catch everything.

note: separate boundaries can be used in modals for example to prevent the entire application from crashing if an error is thrown in a modal

---

## Demo Time!

note: ./advancedTopics/examples/advanced-patterns/src/components/ErrorBoundaryExample

---

## Minimising Re-renders

1. Why minimise re-renders at all?
2. How can you minimise re-renders?

---

## Why minimise re-renders at all?

React generates a representation of the UI and maintains this (the Virtual DOM).

React acts on `Props` or `State` changes to a Component by recalculating whether a DOM update is necessary.

Even though it only updates what it needs to, re-rendering is expensive.

note: generally this is not noticable but degraded performance can become noticable

---

## How can you minimise re-renders

1. Extend `React.PureComponent`
2. Implement `shouldComponentUpdate`
3. Use `React.memo()` Higher Order Component
4. Use the `useMemo()` Hook

note: for the demo we'll focus on `memo` and `useMemo` hook as most components are now leaning to be functional in nature

note: React may choose to forget memoised values, i.e. to free up memory, so they should only be used as a performance optimisation rather than a semantic guarantee

---

## Extending React.PureComponent

```jsx
class MyComponent extends React.PureComponent {
  ...
}
```

  - `PureComponent` is similar to `Component`
  - Only for Class based Components
  - Implements a shallow `props` comparison for `shouldComponentUpdate()`
  - Can be used when a Component's `props` would result in the same UI

note: Shallow comparison will not trigger a rerender for deep object/array changes

note: Will also prevent re-renders of the child component tree

---

## Implementing shouldComponentUpdate()

```jsx
shouldComponentUpdate(nextProps, nextState)
```

  - Again only Class based Components
  - Invoked before `render` in the components lifecycle
  - Returns `true` by default
  - Compare `this.props` against `nextProps` and/or `this.state` against `nextState`
  - Return `false` to prevent re-render

note: componentWillUpdate, render and componentDidUpdate will not fire

note: faulty implementation of this can prevent expected renders

note: should take care not to perform inefficient equality checks

---

## Use `React.memo()` Higher Order Component

```jsx
const MemoComponent = React.memo(MyFunctionalComponent);
```

  - Essentially "PureComponent" for Functional Components
  - Prevents re-renders unless `props` change
  - Not a semantic guarantee

---

## Use `useMemo()` Hook

```jsx
const memoizedValue = useMemo(() => calculateValue(a), [a]);
```

  - Pass a function to calculate the value and an array of dependencies
  - `useMemo` will only re-calculate the value when one of the dependencies have changed
  - Empty dependencies will result in a calculation on every render

note: This also includes during render

note: Don't implement side effects here, those belong in useEffect

---

## Demo Time!

note: ./advancedTopics/examples/advanced-patterns/src/components/MemoExample

---

## Controlled vs Uncontrolled Components

1. What is a Controlled Component?
2. What is an Uncontrolled Component?
3. Why would you want to use Uncontrolled Components?
4. Controlled vs Uncontrolled At a Glance

note: This is mainly concerned with DOM elements which maintain their own internal state, i.e. Form elements

---

## What is a Controlled Component?

  - Input component that takes it's `value` from props
  - Notifies changes through callbacks e.g. `onChange`
  - State is managed by the Parent Component

---

```jsx

export const ControlledInput = () => {

  // The form value is maintained in Component State
  const [value, setValue] = useState("");

  // We create a callback which can be used to update the state
  const onChange = (event) => {
    setValue(event.target.value);
  }

  // The input component's value is passed in as props
  return <input type="text" value={value} onChange={onChange}>;
}

```

---

## What is an Uncontrolled Component?

  - Akin to traditional HTML
  - Input component that manages it's own state internally
  - Query the DOM (via a ref) to get the current value

---

```jsx

export const UncontrolledInput = () => {
  // We create a ref for our input field
  const inputRef = useRef<HTMLInputElement>();

  const handleSubmit = (event) => {
    // We can get the value of the input field from our ref
    console.log(inputRef.current.value);
  };

  // The input takes our ref as a prop, the value is maintained internally in the DOM
  return <input type="text" ref={inputRef} />;
};

```

---

## Why would you want to use an Uncontrolled Component?

  - Quick (but dirty)
  - Library integration (e.g. React Hook Form)
  - Integration with non-React code
  - Necessity (e.g. File Input)

You should more often than not use Controlled Components!

note: Some form libraries, e.g. React Hook Form are designed for use with Uncontrolled components

note: File input fields cannot be programatically manipulated (i.e. the field value set) so have to be handled Uncontrolled.

---

#### Controlled vs Uncontrolled At a Glance

|                                       | Controlled | Uncontrolled |
|---------------------------------------|:----------:|:------------:|
| One time value retrieval              |      ✅     |       ✅      |
| Validating on submit                  |      ✅     |       ✅      |
| File Input                            |      ❌     |       ✅      |
| Instant form/field validation         |      ✅     |       ❌      |
| Conditionally disabling submit button |      ✅     |       ❌      |
| Changing one input based on another   |      ✅     |       ❌      |
| Multiple inputs for one piece of data |      ✅     |       ❌      |
| Dynamically generated inputs          |      ✅     |       ❌      |

---

## Demo Time!

note: ./advancedTopics/examples/advanced-patterns/src/components/ControlledUncontrolledExample

---

### Questions?

___