function avarage(scores){
    //add all scores
    var total = 0;
    scores.forEach(function(score) {
        total += score; 
        
    });
    //divide by number of scores
    var avg = total/ scores.length

    //round avg
    return Math.round(avg);
}



var scores = [90, 98, 89, 100, 100, 86, 94];
console.log(avarage(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(avarage(scores2));