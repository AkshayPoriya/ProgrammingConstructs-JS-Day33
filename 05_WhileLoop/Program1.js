const readline = require('readline-sync');
let num_str = readline.question("Enter a number: ");
let num = parseInt(num_str);
let i =0;
var x = 2<<i;
while(x<=256){
	console.log(x);
	i++;
	x = 2<<i;
}
