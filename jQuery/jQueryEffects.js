$("button").on("click", fucntion(){
	$('div').fadeOut(1000, function(){
		$(this).remove();
	});

});

$("button").on("click", function(){
	$('div').slideToggle();
	// slideDown();
	//slideUp();
});
