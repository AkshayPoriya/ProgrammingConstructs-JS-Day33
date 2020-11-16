const readline = require('readline-sync');
let num_str = readline.question("Enter a number: ");
let num = parseInt(num_str);
let h_mean = 0;
for(let i =1;i<=num;i++){
	h_mean += (1/i);
}
console.log(h_mean);
