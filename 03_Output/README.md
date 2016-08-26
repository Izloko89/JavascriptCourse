#JavaScript Output 

JavaScript does NOT have any built-in print or display functions.

##JavaScript Display Possibilities

JavaScript can "display" data in different ways:

* Writing into an alert box, using **window.alert()**.
* Writing into the HTML output using **document.write()**.
* Writing into an HTML element, using **innerHTML**.
* Writing into the browser console, using **console.log()**.

____________________________________________________________________________________________________________________________

##Using window.alert()

You can use an alert box to display data:

Example:

```html
<!DOCTYPE html>
<html>
<body>

	<h1>My First Web Page</h1>
	<p>My first paragraph.</p>

	<script>
	window.alert(5 + 6);
	</script>

</body>
</html>
```
____________________________________________________________________________________________________________________________

##Using document.write()

For testing purposes, it is convenient to use **document.write()**:

Example:

```html
<!DOCTYPE html>
<html>
<body>

	<h1>My First Web Page</h1>
	<p>My first paragraph.</p>

	<script>
	document.write(5 + 6);
	</script>

</body>
</html>
```

Using document.write() after an HTML document is fully loaded, will **delete all existing HTML**:

Example:

```html
<!DOCTYPE html>
<html>
<body>

	<h1>My First Web Page</h1>
	<p>My first paragraph.</p>

	<button onclick="document.write(5 + 6)">Try it</button>

</body>
</html>
```

:exclamation: The document.write() method should only be used for testing.
____________________________________________________________________________________________________________________________

##Using innerHTML

To access an HTML element, JavaScript can use the **document.getElementById(id)** method. The **id** attribute defines the HTML element. The **innerHTML** property defines the HTML content:

Example:

```html
<!DOCTYPE html>
<html>
<body>

	<h1>My First Web Page</h1>
	<p>My First Paragraph</p>

	<p id="demo"></p>

	<script>
	document.getElementById("demo").innerHTML = 5 + 6;
	</script>

</body>
</html>
```

:exclamation: To "display data" in HTML, (in most cases) you will set the value of an innerHTML property.
____________________________________________________________________________________________________________________________

##Using console.log()

In your browser, you can use the **console.log()** method to display data. Activate the browser console with F12, and select "Console" in the menu.

Example:

```html
<!DOCTYPE html>
<html>
<body>

	<h1>My First Web Page</h1>
	<p>My first paragraph.</p>

	<script>
	console.log(5 + 6);
	</script>

</body>
</html>
```