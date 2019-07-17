function printReverse(arr){
	for(var i = arr.length -1; i>=0 ; i--){
		console.lo(arr[i]);
	}
}
printreverse([3,6,2,5]);

// *** isunifrom()***
// function idUniform() which takes an array as an
// argument and returns true if all elemets in the 
// array are identical like [1,1,1,1] true
// [1,1,1,2] false

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
	}
	return true; 
}
//***sum Array ***  forEach

function sumArray(arr){
	var total = 0; 
	arr.forEach(function(element){
		total += element; 
	}); 
	return total; 
} 
//*** max()***  for loop
function max(arr){
	var max = arr[0];
	for(var i =1; i < arr.length; i ++ ){
		if(arr[i] > max){
			max = arr[i]; 
		}
	}
}