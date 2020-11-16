const readline = require('readline-sync');
let num_str = readline.question("Enter a number: ");
let num = parseInt(num_str);
let num1 = num;
for(let i=2;i<=Math.sqrt(num1);i++){
	while(num%i==0){
		console.log(i);
		num/=i;
	}
}
if(num!=1){
	console.log(num);
}
