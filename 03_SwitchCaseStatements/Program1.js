const readline = require('readline-sync');
let num_str = readline.question("Enter a single digit number: ");
let num = parseInt(num_str);
let num_word = new Array("zero","one","two","three","four","five","six","seven","eight","nine");
switch(num){
	case 0:
		console.log("Number entered is: "+num_word[num]);
		break;
	case 1:
                console.log("Number entered is: "+num_word[num]);
                break;
	case 2:
                console.log("Number entered is: "+num_word[num]);
                break;
	case 3:
                console.log("Number entered is: "+num_word[num]);
                break;
	case 4:
                console.log("Number entered is: "+num_word[num]);
                break;
	case 5:
                console.log("Number entered is: "+num_word[num]);
                break;
	case 6:
                console.log("Number entered is: "+num_word[num]);
                break;
	case 7:
                console.log("Number entered is: "+num_word[num]);
                break;
	case 8:
                console.log("Number entered is: "+num_word[num]);
                break;
	case 9:
                console.log("Number entered is: "+num_word[num]);
                break;
	default:
                console.log("Wrong Input!");
                break;
}
