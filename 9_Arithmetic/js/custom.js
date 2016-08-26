// Arithmetic Operations
function arOp () {
	// Simple
	var x = 100 + 50;
	document.getElementById("demo1").innerHTML = x;

	// Variables
	// var a = 100;
	// var b = 50;
	// var x = a + b;
	// document.getElementById("demo1").innerHTML = x;

	// Expressions
	// var a = 3;
	// var x = (100 + 50) * a;
	// document.getElementById("demo1").innerHTML = x;
}

function opOp () {
	// Adding
	var x = 5;
	var y = 2;
	var z = x + y;
	document.getElementById("demo2").innerHTML = z;

	// Subtracting
	// var x = 5;
	// var y = 2;
	// var z = x - y;
	// document.getElementById("demo2").innerHTML = z;

	// Multiplying
	// var x = 5;
	// var y = 2;
	// var z = x * y;
	// document.getElementById("demo2").innerHTML = z;

	// Dividing
	// var x = 5;
	// var y = 2;
	// var z = x / y;
	// document.getElementById("demo2").innerHTML = z;

	// Modulus
	// var x = 5;
	// var y = 2;
	// var z = x % y;
	// document.getElementById("demo2").innerHTML = z;

	// Incrementing
	// var x = 5;
	// x++;
	// var z = x;
	// document.getElementById("demo2").innerHTML = z;

	// Decrementing
	// var x = 5;
	// x--;
	// var z = x;
	// document.getElementById("demo2").innerHTML = z;
}

// Operators Precedence
function opPro () {
	// Multiplication has precedence over addition
	document.getElementById("demo3").innerHTML = 100 + 50 * 3;

	// Parenthesis has precedence over multiplication
	// document.getElementById("demo").innerHTML = (100 + 50) * 3;

	// When many operations has the same precedence, they are computed from left to right
	// document.getElementById("demo").innerHTML = 100 + 50 - 3;
}