JavaScript Where To
===================

JavaScript can be placed in the `<body>` and the `<head>` sections of an HTML page.

##The `<script>` Tag

In HTML, JavaScript code must be inserted between `<script>` and `</script>` tags.

Example:

```javascript
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>
```

:exclamation: Older examples may use a type attribute: `<script type="text/javascript">`.

:exclamation: This type attribute is not required. JavaScript is the default scripting language in HTML.
____________________________________________________________________________________________________________________________

##JavaScript Functions and Events

A JavaScript **function** is a block of JavaScript code, that can be executed when "asked" for. For example, a function can be executed when an **event** occurs, like when the user clicks a button. You will learn much more about functions and events in later chapters.
____________________________________________________________________________________________________________________________

##JavaScript in `<head>` or `<body>`

You can place any number of scripts in an HTML document. Scripts can be placed in the `<body>`, or in the `<head>` section of an HTML page, or in both.

:exclamation: Keeping all code in one place, is always a good habit.
____________________________________________________________________________________________________________________________

###JavaScript in `<head>`

In this example, a JavaScript function is placed in the `<head>` section of an HTML page. The function is invoked (called) when a button is clicked:

example:

```html
<!DOCTYPE html>
<html>
<head>
	<script>
	function myFunction() {
	    document.getElementById("demo").innerHTML = "Paragraph changed.";
	}
	</script>
</head>

<body>

	<h1>My Web Page</h1>

	<p id="demo">A Paragraph</p>

	<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
```
____________________________________________________________________________________________________________________________

###JavaScript in `<body>`

In this example, a JavaScript function is placed in the `<body>` section of an HTML page. The function is invoked (called) when a button is clicked:

Example:

```html
<!DOCTYPE html>
<html>
<body> 

	<h1>My Web Page</h1>

	<p id="demo">A Paragraph</p>

	<button type="button" onclick="myFunction()">Try it</button>

	<script>
	function myFunction() {
	   document.getElementById("demo").innerHTML = "Paragraph changed.";
	}
	</script>

</body>
</html>
```

:exclamation: It is a good idea to place scripts at the bottom of the `<body>` element.

:exclamation: This can improve page load, because script compilation can slow down the display.
____________________________________________________________________________________________________________________________

##External JavaScript

Scripts can also be placed in external files:

Example myScript.js:

```javascript
function myFunction() {
   document.getElementById("demo").innerHTML = "Paragraph changed.";
}
```

External scripts are practical when the same code is used in many different web pages. JavaScript files have the file extension **.js**. To use an external script, put the name of the script file in the src (source) attribute of a `<script>` tag:

Example:

```html
<!DOCTYPE html>
<html>
<body>
	<script src="myScript.js"></script>
</body>
</html>
```

You can place an external script reference in `<head>` or `<body>` as you like. The script will behave as if it was located exactly where the `<script>` tag is located.

:exclamation: External scripts cannot contain `<script>` tags.
____________________________________________________________________________________________________________________________

##External JavaScript Advantages

Placing JavaScripts in external files has some advantages:

* It separates HTML and code
* It makes HTML and JavaScript easier to read and maintain
* Cached JavaScript files can speed up page loads
