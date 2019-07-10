//instead of 

var tag = document.getElementById("highlight");
tag.style.color = "blue";
tag.style.border ="!0ps solid red";


// DEFINE A CLASS IN CSS
//call class smart

.some-class {
	color : blue;
	border: 10px solid red;
}


var tag =  document.getElementById("highlight");
//!!!!!!!!!!!!! add the new class to the selected element
tag.classList.add("some-class");

// pamietaj, zeby ADD CLASS TO CLASS LIST
// tag.classList.add()