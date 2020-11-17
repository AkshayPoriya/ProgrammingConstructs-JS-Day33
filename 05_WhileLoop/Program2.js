const readline = require('readline-sync');
console.log("Think of a number between 1 and 100: ");
let start = 1;
let end = 100;
console.log("Enter y for YES and n for NO");
while(true){
	let num = Math.floor((start+end)/2);
	var ans = readline.question("is number equals to "+num+" ");
	ans = ans.toLowerCase();
	if(ans=="y"){
		console.log("number is: "+ num);
		break;
	}
	ans = readline.question("is number greater than "+num+" ");
	if(ans=="y"){
		start = num+1;
	}else{
		end = num-1;
	}
}
