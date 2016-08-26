#JavaScript Scope

Scope is the set of variables you have access to.

##JavaScript Scope

In JavaScript, objects and functions are also variables. **In JavaScript, scope is the set of variables, objects, and functions you have access to**. JavaScript has function scope: The scope changes inside functions.
_____________________________________________________________________________________________________________________________

##Local JavaScript Variables

Variables declared within a JavaScript function, become **LOCAL** to the function. Local variables have **local scope**: They can only be accessed within the function.

```javascript
// code here can not use carName

function myFunction() {
    var carName = "Volvo";

    // code here can use carName

}
```

Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.
_____________________________________________________________________________________________________________________________

##Global JavaScript Variables

A variable declared outside a function, becomes **GLOBAL**. A global variable has **global scope**: All scripts and functions on a web page can access it.

```javascript
var carName = " Volvo";

// code here can use carName

function myFunction() {

    // code here can use	carName 

}
```
_____________________________________________________________________________________________________________________________

##Automatically Global

If you assign a value to a variable that has not been declared, it will automatically become a **GLOBAL** variable. This code example will declare a global variable **carName**, even if the value is assigned inside a function.

```javascript
myFunction();

// code here can use carName 

function myFunction() {
    carName = "Volvo";
}
```

:exclamation: Do NOT create global variables unless you intend to.
_____________________________________________________________________________________________________________________________

##Global Variables in HTML

With JavaScript, the global scope is the complete JavaScript environment. In HTML, the global scope is the window object. All global variables belong to the window object.

```javascript
var carName = "Volvo";

// code here can use window.carName
```
_____________________________________________________________________________________________________________________________

##Did You Know?

:exclamation: Your global variables (or functions) can overwrite window variables (or functions).

:exclamation: Any function, including the window object, can overwrite your global variables and functions.
_____________________________________________________________________________________________________________________________

##The Lifetime of JavaScript Variables

The lifetime of a JavaScript variable starts when it is declared.

Local variables are deleted when the function is completed.

Global variables are deleted when you close the page.
_____________________________________________________________________________________________________________________________

##Function Arguments

Function arguments (parameters) work as local variables inside functions.