1) Push and Pop
Push add to the end of an array
var colours = ["red", "orange", "yellow"];
colour.push("green");
//red, orange, yellow, green


Pop remove the last item from array
var colours = ["red", "orange"];
colours.pop();
// red

2)shift and unshift

Unshift to add to the front
var colours = ["red", "orange", "blue"];
colours.unshift("white")
//white, red, orange, blue 

Shift remove from front 
var colours = ["red", "blue"];
colours.shift(); 
//blue
//shift() also returns the removed elements
var col = colors.shift(); // red

3)IndexOf
returns first index at which a given elements can be found


var friends = [" Jov", "jack", "Don"];
friends.indexOf("Jov"); //0 

//if there is not such a name then returns )
friends.indexOf("Ken"); // -1 

4) Slice to copy parts of an array 
 var fruits =["banana", "apple", "melon","orange"];
//use slice to copy 2nd and 3ed fruits
var citrus = fruits.slice(1,3);//apple, melon
//where it starts 1 -apple, where finish 3-orange

// remember must be index number but finish on next 


