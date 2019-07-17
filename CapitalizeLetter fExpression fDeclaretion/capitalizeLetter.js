//function capitalize first char in strng 
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";    // "paris"
var captal =capitalize(city);  // "Paris"

// capture returned value in a variable 

function capitalize(str) {
	if(typeof str === "number") {
		return "that is not a string!"
	}
	return str.charAt(0).toUpperCase() + str.slice(1);

}
var city = "paris";
var capital = capitalize(city);

var num = 37;
var capital = capitalize (num); // "that is not a string !

//function decaretion 

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}


//function expression

var capitalize = function(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

