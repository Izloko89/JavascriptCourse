// Finding a String in a String
function finStr () {
	var str = document.getElementById("p1").innerHTML;
    var pos = str.indexOf("locate");
    // var pos = str.lastIndexOf("locate");            // Try uncomment this line and comment last
    document.getElementById("demo1").innerHTML = pos;
}

// Searching for a String in a String
function seaStr () {
    var str = document.getElementById("p2").innerHTML;
    var pos = str.search("locate");
    document.getElementById("demo2").innerHTML = pos;
}

// The slice() Method
// The substring() Method similar to slice only cannot accept negatives index
// The substr() Method similar to slice difference second parameter specifies the length of the extracted part
function sliMet () {
	var str = "Apple, Banana, Kiwi";
	document.getElementById("demo3").innerHTML = str.slice(7,13);
	// document.getElementById("demo3").innerHTML = str.slice(-12,-6); // Try uncomment this line and comment last
	// document.getElementById("demo3").innerHTML = str.slice(7); // Try uncomment this line and comment last
	// document.getElementById("demo3").innerHTML = str.slice(-12); // Try uncomment this line and commet last
	// document.getElementById("demo").innerHTML = str.substr(7,6); // Try uncomment this line and commet last
}

// Replacing String Content
function repStr () {
    var str = document.getElementById("demo4").innerHTML;
    var txt = str.replace("Microsoft","W3Schools");
    // var txt = str.replace(/Microsoft/g,"W3Schools"); // Try uncomment this line and commet last
    document.getElementById("demo4").innerHTML = txt;
}

// Converting to Upper and Lower Case
function myFunction () {
    var text = document.getElementById("demo5").innerHTML;
    document.getElementById("demo5").innerHTML = text.toUpperCase();
    // document.getElementById("demo5").innerHTML = text.toLowerCase(); // Try uncomment this line and commet last
}

// The concat() Method
function conCat () {
	var text1 = "Hello";
	var text2 = "World!";
	document.getElementById("demo6").innerHTML = text1.concat(" ",text2);
}

// Extracting String Characters
function extStr () {
	var str = "HELLO WORLD";
	// The charAt() method returns the character at a given position in a string
	document.getElementById("demo7").innerHTML = str.charAt(0);
	// The charCodeAt() method returns the unicode of the character at a given position in a string
	// document.getElementById("demo7").innerHTML = str.charCodeAt(0); // Try uncomment this line and commet last
}

// Converting a String to an Array
function convStrarr () {
	// display the first array element, after a string split
    var str = "a,b,c,d,e,f";
    var arr = str.split(",");
    document.getElementById("demo8").innerHTML = arr[0];

    // dislplay array in list form (Try uncomment this lines and commet last)
    // Note: the loop "for" is in this tutorial 
    // var str = "Hello";
	// var arr = str.split("");
	// var text = "";
	// var i;
	// for (i = 0; i < arr.length; i++) {
	//     text += arr[i] + "<br>"
	// }
	// document.getElementById("demo8").innerHTML = text;
}