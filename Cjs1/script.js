 // var userName = prompt("Hello from js file");
 // alert ("Nice to meet you, " + userName);
 // console.log ("Also great to meet you");
 // var userName2 = prompt ("what is your first name?");
 // var userAge = prompt ("What is your age?");
 // alert ("nice to meet you, " + userName2);
 // alert (" Your agre is " + userAge);
 // console.log ("Your age is 4")

// alert (" what is yuur age? ");
// var age = prompt (" your age is " * 365);
// alert ("Your are leaving for " + age * 365);

// var age = prompt ("What is your age?");
// var days = age * 365.25;
// alert( age + " year is roughly " + days + " days");
// var age = 22; 
// if(age < 18){
// 	console.log("Sorry you are not old enough");
// }
// else if(age<21){
// 	console.log("You can enter, but cannot drink");
// }
// else {
// 	console.log("Come on in.You can drink");
// }
var age = Number(prompt("What is your age?"));
if(age < 0) {
	console.log("Come back you are out of womb");
}
if(age === 21) {
	console.log("Happy 21st Birthday");
}
// niepodzielne przez 2 
if(age % 2 !== 0) {
	console.log ("Your age is odd"); 
}
if(age % Math.sqrt(age) === 0) {
	console.log ("Your age is perfect square")
}