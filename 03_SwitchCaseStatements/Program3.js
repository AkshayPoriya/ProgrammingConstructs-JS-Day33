const readline = require('readline-sync');
let num_str = readline.question("Enter a number in the form of (1,10,100,1000 etc): ");
let num = parseInt(num_str);
switch(num){
	case 1:
		console.log("Unit");
		break;
	case 10:
		console.log("Ten");
		break;
	case 100:
		console.log("Hundered");
		break;
	case 1000:
		console.log("Thousand");
		break;
	case 10000:
		console.log("Ten Thousand");
		break;
	case 100000:
		console.log("Lakh");
		break;
	case 1000000:
		console.log("Ten Lakh");
		break;
	case 10000000:
		console.log("Crore");
	        break;
	default:
		break;
}
