# Name Sorter :jigsaw:

This is a simple code to demonstrate how **IIFE** *(Immediately Invoked Function Expression)* works.
---

## Summary
> 1. [What are IIFE functions? :thinking:]()

> 2. [How does the code work? :page_with_curl:]()

> 3. [Special Thanks :medal_sports:]()

---

### What are IIFE functions? :thinking:
To understand how IIFE functions work, let's first recap a little about how functions work.

> "A function is a block of JavaScript code that is defined once but may be executed, or invoked, any number of times. "
**JavaScript The Definitive Guide 6th Edition**

*Functions that do not return `void` are called procedures!* :v::nerd_face:

To use a function in your code, you need to execute or invoke it. However, unlike conventional functions, IIFE functions do not need to be invoked to be executed; they behave as if they are part of the global scope of the code.


* Why use the IIFE functios, then? **Because the scope**.

Since functions have a local scope, once the code finishes executing, the variables created inside the function will not persist in the global scope.


```
(               
    function () { 

    }
)()

```

```
(
    function (parameters) { 

    }
)(arguments) 

```

---


### How does the code work? :page_with_curl:

The code is in a file called `index.js`. It is interpreted by `node.js`. Therefore, you need to have the interpreter installed to run the code.


1. Install the `node.js` interpreter from the official website: [node.js](https://nodejs.org/en)

2. Open the file using `node.js`

3. Use the program! :tada:

---

### Special Thanks :medal_sports:
I learned about IIFE functions from advanced JavaScript classes on YouTube. Below, I will provide the link to the complete playlist of videos.



[Brazilian dev](https://www.youtube.com/watch?v=kGbbPBRFCE0&list=PL-R1FQNkywO4sD42B6OI6KjG3uOPT0aNl) --> Complete playlist on YouTube

---

### Thank you for reading! :computer: :smile_cat: :hugs:

*If you have any questions or feedback, please contact me through my networks.*


* [Linkedin](https://www.linkedin.com/in/alexandre-bitelo-0bab0824b/)

* <nav><a href = "mailto: alexandrebitelo41@gmail.com" target="_blank" rel="external" >Gmail</a>

* [Instagram](https://www.instagram.com/biteloalexandre)
