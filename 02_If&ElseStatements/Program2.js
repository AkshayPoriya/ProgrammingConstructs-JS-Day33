const readline = require('readline-sync');
let day_str = readline.question("Enter day of the month: ");
let month_str = readline.question("Enter month from 1 to 12: ");
let day = parseInt(day_str);
let month = parseInt(month_str);
if(month<1 || month>12 || day<1 || day>31 ){
	console.log("Invalid Input!");
}else if(month==3 && day>=20){
	console.log("yes");
}else if(month==4 && day<=30){
	console.log("yes");
}else if(month==5 && day<=31){
	console.log("yes");
}else if(month==6 && day<=20){
	console.log("yes");
}else{
	console.log("no");
}

