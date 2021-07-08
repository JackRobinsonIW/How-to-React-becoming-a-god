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

A front-end library with a heavy focused on: {.fragment .fade-down}
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

- Support for multiple programming paradigms {.fragment .fade-down}
- Browser Developer Tools {.fragment .fade-down}
- Quickstart toolchains {.fragment .fade-down}
- A whole world of open source goodness {.fragment .fade-down}
  - State Management {.fragment .fade-down}
  - Testing utilities {.fragment .fade-down}
  - Component Libraries! {.fragment .fade-down}

note: Being a library primarily for the development of Facebook, there is a vested interest in ensuring productivity
note: There is great tooling, and solid principles surrounding React.
note: From Browser development tools, to supporting multiple programming paradigms, to other open source toolings, React really can be nice to work with.
note: Being a part of the Javascript ecosystem means less code for you to write - why reinvent the wheel?

---

## How do i start?

Use a quickstart tool! {.fragment .fade-down}

> create-react-app {.fragment .fade-down}

It's as easy as: {.fragment .fade-down}
```sh {.fragment .fade-down}
npx create-react-app app-name --template typescript
```

Or for a plain Javascript version: {.fragment .fade-down}
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
│   ├── App.tsx      # An initial Component that is set up
│   ├── App.test.tsx # A test file for the app component
│   ├── index.css   # base CSS applied globally
│   ├── index.tsx    # the 'root' of the whole app!
│   ├── logo.svg
│   ├── react-app-env.d.ts    
│   ├── reportWebVitals.ts
│   └── setupTests.ts
└── yarn.lock
```

---

### Demo Time!

note: introTopics/examples/createReactApp contains the practical demo for this slide

---

## What is a component?

- A self-contained and reusable bit of code {.fragment .fade-down}
  - A Button {.fragment .fade-down}
  - A Form Field {.fragment .fade-down}
  - A Table Cell {.fragment .fade-down}
- A discrete aspect of the app composed of smaller components{.fragment .fade-down}
  - A navigation bar {.fragment .fade-down}
  - A Table of Results {.fragment .fade-down}
  - A Section of a Form composed of multiple fields {.fragment .fade-down}

---

### What is a component?

A really small component could be a `hello world` header

```jsx {.fragment .fade-down}
const SimpleComponent = () => {
  return (
    <h1>Hello World!</h1>
  )
}

export default SimpleComponent;
```

note: briefly explain what we're looking at here, comment on the demo coming up shortly!

---

### What is a component?

Components can be used inside of other components!

```jsx {.fragment .fade-down}
import SimpleComponent from './SimpleComponent';

const ComponentList = () => {
  return (
    <ul>
      <SimpleComponent />
      <SimpleComponent />
      <SimpleComponent />
    </ul>
  )
}

export default ComponentList;
```

note: What is different here to the component we just looked at? 


---

### What is a component?

Components can have `props`

(Similar to a HTML element's attributes)

```jsx {.fragment .fade-down}
const ComponentWithProps = (props) => {
  const { name } = props;
  return (
    <h1>Hello {name}!</h1>
  )
}

export default ComponentWithProps;
```

note: You could also think of props as 'function parameters'
note: props are things that get passed into your component, and your component can then make use of them
note: this example takes a 'name' as a prop, which it then displays in a heading element

---

### What is a component?

You can then pass `props` into a component

```jsx {.fragment .fade-down}
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

note: This is an example of how you would then pass a prop into a component.
note: You can pass more complex data types as props (e.g. objects, arrays, etc)

note: The demo will show you how you can use an array to 'generate' HTML
note: It does this updating this example such that it uses an array of names.

---

### Demo Time!

note: ./introTopics/examples/whatIsAComponent contains the practical demo 'What is a component' 

---

## Component State

- State within react is just data. {.fragment .fade-down}
- Often used to make components dynamic {.fragment .fade-down}
- Properties that control behaviour {.fragment .fade-down}

note: There is a lot to react state, this is a simple representation of it that should help you get to grips with it
note: updating and changing state has consequences, React will then ...react... to changes made to state.
note: there are different ways of handling/representing state within react. We will look at one common way!

---

### Component State

Examples of state:
- Number of times a button is clicked {.fragment .fade-down}
- Name of a person typed into a form {.fragment .fade-down}
- The time that the next train arrives {.fragment .fade-down}

note: some tangible things you might want to represent in your web app
note: if a component might be dependent on a bit of data, then it could be something that is represented as state

---

### React.useState();

React provides a method to declare and update state {.fragment .fade-down}

```jsx {.fragment .fade-down}
import { useState } from 'React'

// ...
const initialValue = 'some intial value';
const [currentValue, setCurrentValue] = useState(initialValue);
// ...
```

note: `currentValue` represents the Current Value of the state

note: `setCurrentValue` is a method to update `currentValue`

note: `useState` takes an `initialValue` to define what the first value of `currentValue` should be

note: this `useState` method has to be used inside of a React Component.

note: when the value of `currentValue` is updated, using the `setCurrentValue` method, it causes React to 're-render' parts of the page that would be affected by the value change.

---

### Component State Example

Lets look at a simple example of React State in use! {.fragment .fade-down}

> A component that will count the number of times a button is clicked {.fragment .fade-down}

We will need a component to do following: {.fragment .fade-down}
  - Display the number of clicks {.fragment .fade-down}
  - Let the user click a button {.fragment .fade-down}
  - Connect the two things together {.fragment .fade-down}

note: Like all things engineering, there are 1,000,001 ways to do things!
note: this example will try and build on the things we have just looked at and introduce some 'state'
note: you could do the whole thing in a single component, but lets stick with making things small!

note: Point out that again there is gonna be a practical demo of this!

---

#### Display the number of clicks

```jsx {.fragment .fade-down}
const NumberDisplay = (props) => {
  const { count } = props
  return (
    <div>{count}</div>
  )
}

export default NumberDisplay
```

note: this component take a 'count' as a prop and just renders it inside a `div` element.
note: it doesn't do anything other than that
note: if something else in the app wanted to display a number, it could re-use this

---

#### A Button component we can click
```jsx {.fragment .fade-down}
const CounterButton = (props) => {
  const { onClick } = props
  return (
    <button type="button" onClick={onClick}>Count!</button>
  )
}

export default CounterButton
```

note: this component takes a single 'onClick' prop.
note: the onClick prop is to be function that is called when the button element is clicked.

note: this component really is just wrapping a standard HTML button element
note: if there were other more complex behaviours, then it might make more sense to do this

note: if there were other places that wanted a button that reacted upon being clicked, then this could be re-used!
note: if for some reason everywhere in the app needed to change from being `type="button"` to `type="submit"`
note: then only this component would need updating! everywhere using it would automatically be updated 😁

---

#### A Component to connect it all up!

Making use of our two other components.

```jsx {.fragment .fade-down}
import { useState } from 'react'
import CounterButton from './CounterButton'
import NumberDisplay from './NumberDisplay'

const Counter = () => {
  const [numberOfClicks, setNumberOfClicks] = useState(0)
  
  const handleClick = () => setNumberOfClicks(numberOfClicks + 1)
  return (<>
    <NumberDisplay count={numberOfClicks} />
    <CounterButton onClick={handleClick} />
  </>)
}

export default Counter
```

note: This component is where the magic happens!
note: it makes use of our two other components
note: but most crucially it utilises the 'useState' react hook.

note: The useState method returns an array of 2 things:
note: The current value
note: a method to update the current value

note: A handle click method uses the setNumberOfClicks method taken from the hook
note: it sets the current value to be the previous + 1

note: the numberOfClicks value is passed to the number display component
note: the handleClick method id passed as a prop to the CounterButton

---

### Demo Time!

note: ./introTopics/examples/componentState contains the practical demo 'What is a component' 

---

## Styling a Component

There are a few ways to style components:
- Using inline styles {.fragment .fade-down}
- Using traditional stylesheets {.fragment .fade-down}
- Using CSS-in-JS {.fragment .fade-down}

---

### Inline Styles

You can style components by passing CSS rules inline via the `styles` prop:

```jsx {.fragment .fade-down}
import React from 'react'

const SimpleComponent = () => {
  return (
    <h1 styles={{ color="red" }}>Hello World!</h1>
  )
}
```

---

### Traditional Stylesheets

```css {.fragment .fade-down}
.red {
  color: red;
}
```

```jsx {.fragment .fade-down}
import React from 'react';
import './SimpleComponent.css';

const SimpleComponent = () => {
  return (
    <h1 className="red">Hello World!</h1>
  )
}
```

---

### CSS-in-JS

```jsx {.fragment .fade-down}
export default createUseStyles({
  red: {
    color: 'red';
  }
});
```

```jsx {.fragment .fade-down}
import styles from "./CSSInJSStyledComponent.css";

const CSSInJSStyledComponent = () => {
  const classes = styles();

  return <h1 className={classes.red}>Hello World!</h1>;
};
```

---

### So why CSS-in-JS?

- Local Scoping - Uniquely generated CSS classes {.fragment .fade-down}
- Composition using standard Javascript structures (variables, objects, arrays etc.) {.fragment .fade-down}
- Uniquely generated CSS classes per component {.fragment .fade-down}
  - Prevents CSS rule collisions
- Compiled resulting in reduced file size

---

### Demo Time!

note: ./introTopics/examples/componentStyling contains the practical demo
note: Inspect the generated HTML to see the behavior of each

---

## Testing!

- There are a few really good libaries to help {.fragment .fade-down}
- `create-react-app` sets all of this up for you {.fragment .fade-down}

note: This isn't going to go into to much details about principles of testing
note: But it will show you how you can get started on unit testing React components
note: We will drop some links in for anyone more interested in testing!

---

### Testing Components!

What is the aim when testing react components?

> Verifying Behaviours and Interactions

note: Testing React components is the same as testing anything really
note: We want to test that our component behaves as it should
note: and that it interacts with things as expected.

note: Because React is UI, and UI is very visual, it helps to have tools that let you make assertions against 

---

### Testing the Counter Component

There are 3 components here to test: {.fragment .fade-down}
1. NumberDisplay.tsx {.fragment .fade-down}
2. CounterButton.tsx {.fragment .fade-down}
3. Counter.tsx {.fragment .fade-down}

Lets create 3 test files to write our tests in: {.fragment .fade-down}
1. NumberDisplay.test.tsx {.fragment .fade-down}
2. CounterButton.test.tsx {.fragment .fade-down}
3. Counter.test.tsx {.fragment .fade-down}

---

#### NumberDisplay.test.tsx

It is supposed to do 1 thing: {.fragment .fade-down}

> Display the number it is provided {.fragment .fade-down}

---

##### NumberDisplay.test.tsx

> Display the number it is provided
-----
GIVEN some test input {.fragment .fade-down}
```jsx {.fragment .fade-down}
const testInput = 1
```

WHEN rendering the component with the test input {.fragment .fade-down}
```jsx {.fragment .fade-down}
render(<NumberDisplay count={testInput} />)
```

THEN the test input should be visible {.fragment .fade-down}
```js {.fragment .fade-down}
const expectedElement = screen.queryByText(testInput)
expect(expectedElement).toBeInTheDocument()
```

note: using a combination of `jest` and `react-testing-library` it is possible to construct BDD-esque scenarios that let you render individual components, and also inspect what was rendered.

---

#### CounterButton.test.tsx

It is supposed to do 2 things: {.fragment .fade-down}

> Display button for the user to click on {.fragment .fade-down}

> Call a function that is provided when the button is clicked {.fragment .fade-down}

---

##### CounterButton.test.tsx

> Display button for the user to click on
------
GIVEN a Counter Button component {.fragment .fade-down}
```jsx {.fragment .fade-down}
const counterButton = <CounterButton onClick={mockClickHandler}/>
```

WHEN the Counter Button is rendered {.fragment .fade-down}
```jsx {.fragment .fade-down}
render(counterButton);
```

THEN there should be a `Count!` button visible {.fragment .fade-down}
```jsx {.fragment .fade-down}
const expectedElement = screen.queryByText('Count!');
expect(expectedElement).toBeInTheDocument();
```

---

##### CounterButton.test.tsx

> Call a function that is provided when the button is clicked
-----
GIVEN a Counter Button is rendered with a mock function {.fragment .fade-down}
```jsx {.fragment .fade-down}
const mockClickHandler = jest.fn();
render(<CounterButton onClick={mockClickHandler}/>);
```

WHEN the `Count!` button is clicked  {.fragment .fade-down}
```jsx {.fragment .fade-down}
const buttonOnScreen = screen.getByText('Count!');

fireEvent.click(buttonOnScreen);
```

THEN the mock function should have been called {.fragment .fade-down}
```jsx {.fragment .fade-down}
expect(mockClickHandler).toHaveBeenCalled();
```

---

#### Counter.test.tsx

It is supposed to do 3 things: {.fragment .fade-down}

> it should show a number counter defaulting to 0 {.fragment .fade-down}

> it should show a `Click!` button {.fragment .fade-down}

> it should increase the counter when the button is clicked {.fragment .fade-down}

note: This is where things get complicated...
note: a big principle in testing is drawing boundaries around things you want to test
note: You may decide to mock or stub certain things that you want to exclude from your tests

note: a good question to ask yourself when drawing these boundaries is:
note: Will this make it easier for me to test?

---

##### Counter.test.tsx

