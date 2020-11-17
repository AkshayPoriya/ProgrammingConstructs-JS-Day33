const readline = require('readline-sync');
let num_str = readline.question("Enter a number: ");
let num = parseInt(num_str);
function isPrime(x){
	for(let i=2;i<=Math.sqrt(x);i++){
		if(x%i==0){
			return false;
		}
	}
	return true;
}
function palindrome(x){
	x = x.toString();
	let n = x.length;
	var ans = "";
	for(let i =n-1;i>=0;i--){
		ans+=x.charAt(i);
	}
	ans = parseInt(ans);
	return ans;
}

if(isPrime(num)){
	console.log(num + " is a prime number");
}else{
	console.log(num + " is not a prime number");
}

let pal = palindrome(num);
console.log("palindrome is: "+pal);
if(isPrime(pal)){
        console.log(pal + " is a prime number");
}else{
        console.log(pal + " is not a prime number");
}
