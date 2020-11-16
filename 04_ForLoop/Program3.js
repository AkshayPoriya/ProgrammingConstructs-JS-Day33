const readline = require('readline-sync');
let num_str = readline.question("Enter a number: ");
let num = parseInt(num_str);
let is_prime = true;
for(let i=2;i<=Math.sqrt(num);i++){
	if(num%2==0){
		is_prime = false;
		break;
	}
}
if(is_prime){
	console.log(num + " is a prime number!");
}else{
	console.log(num +" is not a prime number!");
}
