#JavaScript Statements

In HTML, JavaScript statements are "instructions" to be "executed" by the web browser.

##JavaScript Statements

This statement tells the browser to write "Hello Dolly." inside an HTML element with id="demo":

Example:

```javascript
document.getElementById("demo").innerHTML = "Hello Dolly.";
```
____________________________________________________________________________________________________________________________

##JavaScript Programs

Most JavaScript programs contain many JavaScript statements.The statements are executed, one by one, in the same order as they are written.

In this example x, y, and z are given values, and finally z is displayed:

```javascript
var x = 5;
var y = 6;
var z = x + y;
document.getElementById("demo").innerHTML = z;
```

:exclamation: JavaScript programs (and JavaScript statements) are often called JavaScript code.
____________________________________________________________________________________________________________________________

##Semicolons ;

Semicolons separate JavaScript statements. Add a semicolon at the end of each executable statement

```javascript
a = 5;
b = 6;
c = a + b;
```

When separated by semicolons, multiple statements on one line are allowed:

```javascript
a = 5; b = 6; c = a + b;
```

:exclamation: On the web, you might see examples without semicolons. 

:exclamation: Ending statements with semicolon is not required, but highly recommended.
____________________________________________________________________________________________________________________________

##JavaScript White Space

JavaScript ignores multiple spaces. You can add white space to your script to make it more readable. The following lines are equivalent:

```javascript
var person = "Hege";
var person="Hege";
```

A good practice is to put spaces around operators ( = + - * / ):

```javascript
var x = y + z;
```
____________________________________________________________________________________________________________________________

##JavaScript Line Length and Line Breaks

For best readability, programmers often like to avoid code lines longer than 80 characters. If a JavaScript statement does not fit on one line, the best place to break it, is after an operator:

```javascript
document.getElementById("demo").innerHTML =
"Hello Dolly.";
```
____________________________________________________________________________________________________________________________

##JavaScript Code Blocks

JavaScript statements can be grouped together in code blocks, inside curly brackets {...}.The purpose of code blocks is to define statements to be executed together. One place you will find statements grouped together in blocks, are in JavaScript functions:

```javascript
function myFunction() {
    document.getElementById("demo").innerHTML = "Hello Dolly.";
    document.getElementById("myDIV").innerHTML = "How are you?";
}
```

:exclamation: In this tutorial we use 4 spaces of indentation for code blocks.

:exclamation:You will learn more about functions later in this tutorial.
____________________________________________________________________________________________________________________________

##JavaScript Keywords

JavaScript statements often start with a **keyword** to identify the JavaScript action to be performed. Here is a list of some of the keywords you will learn about in this tutorial:


Keyword | Description
------- | -----------
break | Terminates a switch or a loop
continue | Jumps out of a loop and starts at the top
debugger | Stops the execution of JavaScript, and calls (if available) the debugging function
do ... while | Executes a block of statements, and repeats the block, while a condition is true
for | Marks a block of statements to be executed, as long as a condition is true
function | Declares a function
if ... else | Marks a block of statements to be executed, depending on a condition
return | Exits a function
switch | Marks a block of statements to be executed, depending on different cases
try ... catch | Implements error handling to a block of statements
var | Declares a variable

:exclamation: JavaScript keywords are reserved words. Reserved words cannot be used as names for variables.