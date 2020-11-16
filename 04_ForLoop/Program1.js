const readline = require('readline-sync');
let num_str = readline.question("Enter a number: ");
let num = parseInt(num_str);
for(let i = 0;i<=num;i++){
	console.log(2<<i);
}
