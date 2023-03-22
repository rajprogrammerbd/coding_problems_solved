# **React.js**

* ReactJS is an open-source frontend JavaScript library which is used to build user interface and handle view layers for web and mobile applications. It follows a component-based approach.The React package contain only the functionality necessary to define React component. It is typically used together with a React renderer like react-DOM for the web or react-native for the native environments.

* **What are the features of React.js?**
* *Virtual DOM*
* *Server-side rendering*
* *Uni-directional data flow or data binding*

* **List some of the advantages of React** Increases the application’s performance. Can be used on the client as well as server side. Readability is improved. Easy to integrate. Easy to write UI test cases.

* **What is JSX?** JSX stands for JavaScript XML. Utilizes the expressiveness of JavaScript with a HTML-like template syntax. Makes HTML easy to understand. It is Robust. Boots up the JS Performance. JSX expression must have only one outermost element.

* **What do you understand by Virtual DOM?** A virtual DOM is a lightweight JavaScript object which is the copy of the real DOM. Whenever any underlying data changes, the entire UI is re-rendered in Virtual DOM representation. Then the difference between the previous DOM representation and the new one is calculated. Once the calculations are done, the real DOM will be updated with only the things that have actually changed.
* **Differentiate between Real DOM and Virtual DOM?** REAL DOM. It updates slow. Can directly update HTML. Creates a new DOM if element updates. DOM manipulation is very expensive. Too much of memory wastage.

* ***VIRTUAL DOM*** It updates faster. Can’t directly update HTML. Updates the JSX if element updates. DOM manipulation is very easy. No memory wastage.

* **Why can’t browser read JSX?** JSX is not a regular JavaScript object. Browser can read JavaScript objects only. JSX file is converted to JS object by JSX transformers like babel, before reaching browser.

* **What is JSX Transform?** JSX transform automatically compiles the JSX source code without having to rely upon the typical compilers. With the new transform, JSX can be used without importing React. Complied output slightly improves the bundle size.

* **How React syntax changed from ES5 to ES6?**

```
    var MyComponent = React.createClass() (ES5)
    class MyComponent extends React.Component {} (ES6)
```

* **How are Error handled in React?** The most distinctive and React-specific type of error handling is known as error boundaries. Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

* **What are the error boundaries do not catch errors?** Event handlers. Asynchronous code. Server-side rendering. Errors thrown in the error boundaries itself.

* **What are the features introduced  in ES7?** ***Array.prototype.includes()***: It checks the array for the value passed as an argument. It returns true if the array contains the value, otherwise, it returns false. Exponentiation Operator: ECMAScript 2016 introduced the exponentiation operator. It has the same purpose as ***Math.pow()***. List some of the features of ES10. Optional Catch Binding. ***Object.fromEntries()***, ***Array.flat()***,***Array.flatMap()***, Dynamic Import, globalThis object.

* **How React is different from Angular?**
* ***REACT.JS*** Only the view of MVC. Server-side rendering. Uses virtual DOM. One-way data binding. Compile time debugging.

* ***ANGULAR*** Complete MVC. Client-side rendering. Uses real DOM. Two-way data binding. Runtime debugging.

* **What do you understand from “In React, everything is a Component”?** Components are the building blocks of a React application’s UI. Components split up the entire UI into small independent and reusable pieces. JavaScript functions which takes in arbitrary inputs and returns HTML representation.

* **What are Props in React?** Short for properties. Read-only. Pure or immutable. Always passed down from parent to child component. Used to render dynamic data.

* **What is a State in React and how it is used?** Heart of react component. Must be kept as simple as possible. Determine components rendering and behavior. Accessed via ***this.state()***.

* **What are React Hooks?** Functions that lets us hook into React state and lifecycle features from a functional component. React hooks can’t be used in class components.

* **Do you know any of the techniques to optimize React app performance?** Using ***React.useMemo()***. It’s a React hook that is used for caching CPU-Expensive functions. ***useMemo()*** hook can be used to cache such functions. It’s a base component class that checks the state and props of a component to know weather the component should be updated.

* **Maintaining state colocation –** This is a process of moving the state as close to where we need it as possible.

* **What is lazy loading?** Lazy loading is the feature introduced in React v16.6, which allows for some Components to load later that other components. It is also referred to as code splitting and data fetching.

* **What do you mean by Context in React?** The react context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to “Props Drilling”. A new type of context can be created using React.createContext API.

* **What do you mean by Prop Drilling?** It can be defined as a process in React app where props are passed from one part of a tree to another by going through other parts that do not need the data, but only help in passing it through the tree. It is also known as Prop Threading. Differentiate between stateful and stateless components.

* ***Stateful Component*** Stores info about component state change in memory. Have authority to change state. Contains the knowledge of past, current and possible future changes in state.
Stateless components notifies them about the requirements of the state changes, then they send down the props to them.

* ***Stateless Component*** Calculate the internal state of the components. Do not have the authority to change state. Contains no knowledge of past, current and possible future state changes. They receive the props from stateFull components to treat them as callback functions.

* **What do you know about controlled and uncontrolled components?**
* ***Controlled components*** Don’t maintain their own state. Data is controlled by the parent component. Takes in current values through props and notifies changes via callbacks.

* ***Uncontrolled components*** Maintain their own state. Data is controlled by the DOM. Refs are used to get their current value.

* **What are higher order components?** Custom components which wraps another component. They accept dynamically provided child components. Do not modify the input component. Do not copy any behavior from the input component. Are “Pure” functions.

* **What can you do with HOC?** Code reuse, logic and bootstrap abstraction. Render high jacking. State abstraction and manipulation. Props manipulation.

* **What are pure components?** Pure components are the simplest, fastest components which we can write. Can replace any component that only has render(). Enhances the simplicity and performance of the application.

* **What were the major problems with MVC frameworks?** DOM Manipulation was very expensive. Slow and inefficient. Memory wastage. Because of circular dependencies, complicated model was created around models and views.

* **What is Redux?** Redux one of the hottest libraries for front end development. Redux is a predictable state container for JavaScript apps. Mostly used for application state management. Application developed with Redux are easy to test. Helps to write applications that behave consistently and can run in different environments.

* **What are the three principle that redux follows?**

* *Single Source of Truth:* Redux consists of a single store, which is a JavaScript value containing the entire state of your application. A single source of truth comes with a lot of benefits: In traditional applications, the state is stored in different places across the whole application.

* *Read-only State:* There is only one way for changing the state–emit an action or an object that describes what happened. As per the second principle, neither the network nor the views callbacks would ever write to the state. Instead of it, these express intent for the transformation of the form.

* *The Modifications are Done with Pure Functions:* In order to specify how can the state tree be transformed by actions, you can write pure reducers. The reducers are merely pure functions, which take the previous state as well as action and move it to the next state. You should remember that you should return to new state objects other than mutating to the last state.

* **What is throttling?** Throttling is a technique used to limit execution of an event handler function, even when the event triggers continuously due to the user actions.
