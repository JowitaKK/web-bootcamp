//check off todos by clicking
// $("li").click(function(){
// 	//if li is gray
// 	if($(this).css("color") ==="rgb(128, 128, 128)"){
// //turn it black
// 	 $(this).css({
// 	 	color: "black",
// 	 	textDecoration: "none"

// 	 });  
// }
// //else
// 	else {
// 		//turn it gray
// 	  $(this).css({
// 	  	color:"gray",
// 	  	textDecoration: "line-through"
// 	  })
// 	}
// });

//drugi sposob stworz klase w css .completed

$("ul").on("click",function(){   //on instead of click elements which doesn not exist yet 
	$(this).toggleClass("completed");
});

//click on X to delete toDo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){   //this is about span, parent is li, fedeOut-calosc
		$(this).remove();// this is about calosc 

	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ // 13 code foe enter
	//grabbing new todo text form input
	var todoText = $(this).val(); // odczytuje zapis w miejscu textu
	$(this).val(""); //nowy string text
	// create a new li and add to ul
	$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});