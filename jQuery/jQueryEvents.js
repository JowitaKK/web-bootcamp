// click() add click listener to element(s)
//click when item with id 'submit' is clocked
-------CLICK----
$('#sumbit').click(function(){
	console.log("another click");
});

//alerts when any button is clicked 
$('button').click(function(){
	alert("somone clicked a button");
});

$('button').click(function(){
	£(this).css("background","pink");

});

$("button").click(function(){
	var text = $(this).text();
	console.log ("You clicked"  + text); 
});

--------KEYPRESS----------
$("input")
$("input").keypress(function(){
	console.log("You pressed a key")
});

//check website for it javaScript characters code = like enter= has code 13

$("input").keypress(function(event){
	if(event.which === 13){
		alert("you hit ENTER!");
	}
});

--------------ON--------------

$("button").on("mouseenter", function(){
	console.log("mouse entered")

});
$("button").on("mouseenter", function(){// or mouseleave
	$(this).css("font-weight","bold");  //normal

});


// print when item with id 'sumbit' is clicked
$ ('#submit').on('click', function(){
	console.log("another click");
});

//double click event
$("button").on("dblclick", function(){
	alert("Doube clicked ");
};

//drag start event
$('a').on("dragstart", function(){
	console.log("Drag start");
});
//keypress
$('input[type="text"]').on('keypress',function(){
	

});
