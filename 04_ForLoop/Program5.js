const readline = require('readline-sync');
let num_str = readline.question("Enter a number: ");
let num = parseInt(num_str);
let fact = 1;
for(let i=1;i<=num;i++){
	fact*=i;
}
console.log("Factorial of "+fact+" is: "+fact);
