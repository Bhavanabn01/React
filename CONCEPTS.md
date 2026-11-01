# React Basics

This project introduces the building blocks of a React interface: components,
props, state, and events.

## Components

A component is a small, reusable piece of a page. In `src/App.jsx`, `Greeting`
and `Counter` are components, and `App` puts them together. A component returns
JSX, which looks like HTML but lets you describe the interface with JavaScript.

## Props

Props are values a parent component gives to a child. `App` passes
`name="Bhavana"` to `Greeting`. The greeting uses that value to show a
personalized message. Props help the same component display different content.

## State

State is information that can change while the page is being used. `Counter`
uses React's `useState` Hook to keep track of the current count. When the
button updates the count, React renders the component again with the new value.

## Events

An event is something the user does, such as clicking a button. The counter's
`onClick` handler calls `setCount` to increase the count. React updates the
display so it stays in sync with the state.

## In short

Build a page from components, pass information with props, and use state and
events when the page needs to respond to the user.
