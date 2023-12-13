# Phase 1 Lecture 3: DOM Events

## Objectives

By the end of today's lecture, you will be able to name three of the most commonly-seen event listeners, and will also know the process behind adding an event listener to the DOM and triggering it.

## Lesson Plan

1. Add an event listener to the `<h1>` tag so that when it is hovered over, its text changes color.
    - What kind of **event listener** is this? a mouseover event
    - What are the elements of an event listener?
    - What is a **function invocation**? having the function happen when the event is made (like a click, etc)
    - Why doesn't the color change back when we remove our mouse hover? we dont have a mouseout event yet only the mouseover
    - What is **hoisting**? calling a function before the function is mentioned in the file
2. Add an event listener to the first `<button>` tag so that when it is clicked, it changes to say "Clicked!".
    - What kind of event listener is this? mouseclick
3. Add an event listener to the second `<button>` tag so that when it is clicked, the background changes color.
4. Add an event listener to the form so that when it is submitted, the `<p>` tag says "Welcome, [name]!"
    - What kind of event listener is this?
    - What is `event` or `e`?
    - Why is `preventDefault` necessary here?
    - How do you grab a value from within a form?

## Looking Ahead

Tomorrow's lecture will introduce the JSON file and how we can use it to store and grab information.