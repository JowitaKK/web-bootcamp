var todos = ["buy a dress"];
var input = prompt (" What would you like to do? ");

while(input !=="quit"){
//handle input
if(input === "list") {
	console.log(todos);
}else if(input === "new") {
//ask for new todo
var newTodo = prompt ("Enter new todo");
// add to te array
todos.push(newTodo);
}
//ask again for new input
input = prompt ("Wht would you like to do?");
}
console.log("Ok, you quit the app");