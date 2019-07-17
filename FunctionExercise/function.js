//is even 

//function isEven(num){
	//return true if even
	// if (num %2 === 0) {
	// 	return true
	// }else {
	// 	return false
	// }

//}   or
// function isEven(num) {
// 	return num % 2 ===0; 
// }



// // it is line factorial (4) 4x3x2x1
function factorial(num){
// 	//define reuslt variable 
 var result = 1;     //koncowy efekt 4321
for(var i=1; i <=num; i++){
	result = result * i; or // to samo result *= i; 
	}
	return result; 
}




kebabToSnake zamienia - myslnik (kabab-case) na podkreslinik (kebab_case)

function kebabToSnake(str) {
	//replace all '-' with '_'

	var newStr = str.replace(/-/g , "_"); // newStr zachowuje poprzendi wyraz w /-/ umieszczamy co 
	//chcemy zmienic, w "_" na co zamienic; g jest stale 
	return newStr; 
}