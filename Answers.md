# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a JavaScript library that is used to build out user interfaces. React tries to solve issues related to apps needing to change state frequently. React reduces the number of DOM manipulations made in order to increase performance on a web site. 

1. What does it mean to think in react?

Thinking in React means to think in terms of components, component hierarchy, and the state of those components.

1. Describe state.

State in React is an object that represents parts of the app that can be changed. State allows us to add/delete things to a page and add interactivity. 

1. Describe props.

Props are the arguments that get passed into React components. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

A side effect in React is anything that affects something else outside the scope of the function currently being executed. We sync side effects in a component to state/props by passing a dependency array as the second argument to the effect hook. 
