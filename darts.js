/*jshint esversion: 6*/


scoreThrows = function(radius){
	console.log(radius);
	var score = 0;
	for(i = 0; i<radius.length; i++){
		if(radius[i] > 10){
			//console.log(radius[i]);
			score += 0;
		}
		else if (radius[i] >= 5) {
			//console.log(radius[i]);
			score += 5;
		}
		else if (radius[i] < 5){
			//console.log(radius[i]);
			score += 10;
		}
	}
	
	return score;
};
module.exports = scoreThrows;

console.log(scoreThrows([1,6,15]));