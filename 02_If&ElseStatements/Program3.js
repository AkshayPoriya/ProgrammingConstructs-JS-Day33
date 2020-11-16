const readline = require('readline-sync');
let year_str = readline.question("Enter year: ");
let year = parseInt(year_str);
if(year%400==0){
	console.log("Leap Year!");
}else if(year%4==0 && year%100!=0){
	console.log("Leap Year!");
}else{
	console.log("Not a Leap Year!")
}
