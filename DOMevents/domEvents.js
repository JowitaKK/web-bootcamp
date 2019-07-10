elesment.addEventListener(type, functionTocall);

var button = document.querySelector ("button");
button.addEventListener("click", function() {
	console.log("You clicked the button!");
});

//disply message when button is clicked 


 var button = document.querySelector("button");
 var paragraph = document.querySelector("p");
//setub click listener 
button.addEventListener("click", function() { 
	paragraph.textContent = "You clicked the Button !"
});

// the same can be write using a name function 
var button = document.querySelector ("button");
var paragraph = document.querySelector ("p");

button.addEventListener("click", changeText);

function changeText() {
	paragraph.textContent = "You clicked the button";// body...
}

var paragraph = document.querySelector("p");

//SETUP MOUSE OVER LISTENER
paragraph.addEventListener("mouseover", function() {
  this.textContent = "Stop hovering over me!";
});

//SETUP MOUSE OUT LISTENER
paragraph.addEventListener("mouseout", function() {
  this.textContent = "Phew, thank you for leaving me alone";
});



//gdy mamy np 3 li wymienione (roze, tulipan, kwiatki)
var lis = document.querySelector("li");

for(var i=0; i < lis.length; i++){
	lis[i]. addEventListener("click",function() {
		this.style.color = "pink";

	});
}  


