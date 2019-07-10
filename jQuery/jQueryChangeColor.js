1
$("h1").css("color","yellow") // color na yellow zmienic
2
document.querySelector("h1").style.color = "orange";
3
var style {
	color = "red",
	border = "2px solic yellow"
}

$("h1")css(style)

4
var lis =  document.querySelectorAll("li");
for(var i = 0; i < lis.length; i++){
	lis[i].style.color = "green";

}
$("a").css("font-size", "40px")
$("li").css({
	fontSize: "10px",
	border: "3px dashed purple",
	backround: "rgba (89, 45, 20, 0.5)"
});

// manipulating style

$(selector).css(property,value)

//.css(property, value)
//select element with id "special" and give a border
$("#special").css("border", "2px solid red");

//pr pass in an object with styles 
var styles = {
	backrground : "pink",
	fontWeight : "bold"
};

$("#special").css(styles);
}