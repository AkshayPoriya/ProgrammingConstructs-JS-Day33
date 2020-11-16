const readline = require('readline-sync');
let num_str = readline.question("Enter starting number: ");
let start = parseInt(num_str);
let end_str = readline.question("Enter ending number: ");
let end = parseInt(end_str);
for(let i = start;i<=end;i++){
	let prime = true;
	for(let j = 2;j<=Math.sqrt(i);j++){
		if(i%j==0){
			prime = false;
			break;
		}
	}
	if(prime){
		console.log(i);
	}
}
