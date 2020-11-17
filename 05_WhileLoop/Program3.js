const readline = require('readline-sync');
var str = readline.question("Enter t for Tail and h for HEAD: ");
str = str.toLowerCase();
let target = 0;
if(str == "t"){
	target = 1;
}else{
	target = 0;
}
let win = 0;
while(win<11){
	let coin = Math.floor(Math.random()*1000)%2;
	if(coin == 1){
		console.log("Tail");
	}else{
		console.log("Head");
	}
	if(coin == target){
		win++;
	}
}
