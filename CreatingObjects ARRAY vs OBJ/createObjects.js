// options of creating objects Make an empty objest and add to it
// remember here we use (=)!!!!!
var person = {}
person.name = "Jov"; 
person.age = 21;
person.city = "LA";

// all at once // just to remember here we use (:) !! 
var person = {
	name : "jov",
	age : 21,
	city : "lA"
}; 
// one more way of initializing an object 

var person = new Object();
person.name = "Jov"; 
person.age = 21;
person.city = "LA";


// ARRAY VS OBJECT

//array 
var dog = ["Rusty", "Jov", "Mac"];
// retrievieng data 
dog[1]; // "Jov"

//adding
dog.push("Mat")



//object
var dog = {
	name : "Jov",
	age : 21
}
// retriving object
dog["name"]
//or
dog.name 
//adding
dog.country = "LA";
//or
dog["country"]= "lA";
