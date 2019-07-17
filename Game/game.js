//create secret number
var secretNumber = 4;

//ask user for guess
var guess = prompt("Guess a number")

//check guess
if(Number(guess) === secretNumber) {
	alert("You got it right");
}
// else {
// 	alert("wrong"); 
// }
//check if guess is gigher
else if(Number(guess) > secretNumber){
	alert("Too high number");
}
else if(Number(guess) < secretNumber){
	alert("Too low. Guess again!");
	// or the same as
	//else {
		// alert("Too low.Guess again!");
//	}
}