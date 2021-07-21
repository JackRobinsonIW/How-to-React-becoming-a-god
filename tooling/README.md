---
theme: "night"
transition: "slide"
highlightTheme: "monokai"
slideNumber: false
title: "Tooling to support React"
---

# Tooling to support React

---

## What Will We Discuss?

1. Storybook
2. React Developer Tools
3. Prettier
4. ESLint

---

## Storybook

1. What is Storybook?
2. What is a Story?
3. What are the benefits of using Storybook?
4. How do you setup Storybook?
5. Example Storybooks

---

## What is Storybook?

Storybook is a tool enabling developers to rapidly develop UI components and pages by defining Stories.

It is not React specific.

note: Storybook can be used with other libraries, such as Angular, Vue, Svelte etc.

note: Adopted for use by many high profile organisations including Github, Dropbox, Airbnb, Mozilla

---

## What is Storybook?

Storybook promotes the creation of isolated components and the composition of these components into larger pages.

note: This builds on the basic React concept of small discrete components nicely

---

## What is a Story?

A Story describes a component in a particular state.

We can create multiple stories for a single component that can describe the same component in different states.

note: For example a Button component with a prop specifying different sizes

---

## Example Story

Let us create a simple component:

```jsx
export const Button = ({ primary = false, label }: ButtonProps) => {
  const classes = styles();

  const { storybookButtonPrimary, storybookButtonSecondary } = classes;

  const buttonClass = primary ? storybookButtonPrimary : storybookButtonSecondary;

  return (
    <button type="button" className={buttonClass}>
      {label}
    </button>
  );
};
```

---

## Example Story

We can create a story that looks like this:

```jsx
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
};
```

note: There's a bit of setup that has been skipped here but we'll dig through this when we run through the demo later.  The thing to note at this stage is that we're defining the different states our component can exist in

---

## How do you setup Storybook?

It's simply a case of running `npx sb init` inside an existing project

For example one created using `create-react-app`

note: This is best done at the very beginning of creating your project, otherwise you might have to configure storybook further to work with your existing project setup

---

## Demo Time!

---

## What are the benefits of using Storybook?

- Stories help us build up UI components rapidly, increases development speed

- Stories help to document our components.

- Stories can be used to help the testing process.

- Storybooks can be built and published for wider audiences

note: By building up our UI using stories we need not spin up the entire application to test a change.  For example, the effect of making some text bold. 

note: By building up Stories of our components, we instantly document a Component's functionality and the various properties it supports and provide examples for free

note: We can actually reuse our stories by importing them into our unit tests

---

## Example Storybooks

- [Storybook's Own](https://next--storybookjs.netlify.app/official-storybook/)

- [BBC News](https://bbc.github.io/psammead/)

- [The Guardian](https://5dfcbf3012392c0020e7140b-gmgigeoguh.chromatic.com/)

- [Shopify](https://5d559397bae39100201eedc1-vtjuukkvtu.chromatic.com/)

---

## React Developer Tools

React Developer Tools is a browser extension that helps developers debug their React application.

![React Developer Tools UI](https://lh3.googleusercontent.com/XWuZGqIrIsaoKHUqqQ2rs_GhS5JaH1p5pPBIUpj22mjNRNdR3Ana8FKz4B7JwsA6HIFVXGuU7pa4ELiW6iUNhs0Iyg=w640-h400-e365-rj-sc0x00ffffff)

---

## React Developer Tools

Once installed, it enables visualisation of the component tree and interrogation of the component's `State` and provided `Props`

note: also allows manipulation of both state and props

note: Quick demo here demonstrating it

---

## React Developer Tools

[Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

[Firefox](https://addons.mozilla.org/en-GB/firefox/addon/react-devtools/)

---

## Prettier & ESLint

- Prettier is a code formatter
  - Formats your code to conform to a consistent style
  - Opinionated, very limited in terms of configuration

- ESLint performs static code analysis
  - Ensures your code confirms to agreed rules and conventions
  - Highlights and (if configured/able to do so) fixes issues
  - Highly configurable

---

## Prettier

As an example Prettier will turn this:

```jsx

const myObject = { someLongProperty, someOtherProperty, someReallyLongProperty, someReallyReallyLongProperty }

```

---

## Prettier

Into this:

```jsx

const myObject = {
  someLongProperty,
  someOtherProperty,
  someReallyLongProperty,
  someReallyReallyLongProperty,
};

```

note: the extra dangling comma and the semi-colon added

---

## Ruleset

The ruleset for Prettier is extremely limited 

---

## ESLint

ESLint will not immediately fix issues, but can raise warnings and errors.  Consider the trivial example:

```jsx

const varaibleA = 'hello';
const variableB = 'world';

console.log(variableB);

```

---

## ESLint

Depending on the rules configured, the previous example could raise a number of warnings/errors:

- No Unused Variables
  - `variableA` wasn't used anywhere in the example

- No `console.log` statements
  - We output a console.log

- No single quotes
  - We might have a rule configured to only allow double quotes to be used for strings

---

## IDE and Pipeline Integration

Both Prettier and ESLint can be configured to run:
- In your IDE (via installed extensions)
- In pre-commit hooks (for example using Husky)
- In your pipeline (for example via NPM commands)