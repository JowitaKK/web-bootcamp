var movies = [
{
	title : "Frozen",
	hasWatched : true,
	rating : 5
},
{
	title : "For",
	hasWatched : false,
	rating : 4
}
]

movies.forEach(function(movie){
	var result = "You have ";
if(movie.hasWatched){
	result += "watched";
} elase {
	result += "not seen";
}
result += " \"" + movie.title + "\" - "; 
result += movie.rating + "stars"; 
console.log(result)
})



//or 

function buildString(movie){
	var result = "You have ";
if(movie.hasWatched){
	result += "watched";
} elase {
	result += "not seen";
}
result += " \"" + movie.title + "\" - "; 
result += movie.rating + "stars"; 
return result;

movies.forEach(function(movie){
	console.log(buildString(movie));
})
}

}