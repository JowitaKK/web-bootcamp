var body = document.querrySelector("body");
var isBlue = false;

setInterval (function(){
	if (isBule) {
		body.style.backround = "white";

	} else {
		body.style.backround = "#3498db";
	}
	isBlue = !isBlue; 
}, 1000); 


// 4 different ways to select first <p> tag

// <body> 
 	// <h1> I am an h1 </h1>
 	// <p id = "first" class = "special "> Hello </p>

 	options 

 document.getElementById("first");

 document.querySeector("#first");

 document.getElementByClassName("speciel");

 document.getElementByClassName("special")[0]
 