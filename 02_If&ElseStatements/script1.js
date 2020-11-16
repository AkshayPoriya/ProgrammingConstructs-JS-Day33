const readline = require('readline-sync');
let num_str = readline.question("Enter a single digit number: ");
let num = parseInt(num_str);
let num_word = new Array("zero","one","two","three","four","five","six","seven","eight","nine");
if(num<0 || num>9){
	console.log("Incorrect Input!");
}else{
	console.log("Number entered is: "+num_word[num]);
}
