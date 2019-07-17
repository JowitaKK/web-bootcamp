var todo = ["buy new dress"];

var input = prompt (" What would you like to do?");

while(input !== "quit"){
	//handle input
	if(input === "list") {
		console.log("******")
		todo.forEach(function(todo, index){  //index- can be any name- index of this particualr todo
			console.log(i + ":" + todo);
		});
		console.log("******")
	}else if(input === "new") {
		//ask for new todo
		var newTodo = prompt ("Eter new todo");
		//add to todo array
		todo.push(newTodo);
	}else if(input === "delete") {
		//ask for index of todo to be deleted 
		var index = prompt ("Enter index od todo to delete");
		todos.splice(index, 1);
		//delete that todo	
	}
	//ask again for new input 
	input = ("What would you liek to do?");
	}
	console.log("ok, you quit the app"); 


// or organize this code into a function 
// var todo = ["buy new dress"];

// var input = prompt (" What would you like to do?");

// while(input !== "quit"){
// 	//handle input
// 	if(input === "list") {
// 		printList();
// 	} else if(input === "new") {
// 		addTodo();
// 	} else if(input === "delete") {
// 		deleteTodo();
// 	}
// 	//ask again for new input
// 	input = prompt("What would you like to do?");
// }
// console.log("OK, YOU QUIT THE APP");

// function printList() {
// 	console.log("**********");
// 	todos.forEach(function(todo, index){
// 		console.log(index + ": " + todo);
// 	});
// 	console.log("**********");
// }

// function addTodo(){
// 	//ask for new todo
// 	var newTodo = prompt("Enter new todo");
// 	//add to todos array
// 	todos.push(newTodo);
// 	console.log(newTodo + " added to list")
// }

// function deleteTodo(){
// 	var index = prompt("Enter index of todo to delete");
// 	todos.splice(index, 1);
// 	console.log("Todo Removed")
// }