const readline = require('readline-sync');
let num_str = readline.question("Enter a number in the form of (1,10,100,1000 etc): ");
let num = parseInt(num_str);
if(num==1){
        console.log("Unit");
}else if(num==10){
        console.log("Ten");
}else if(num==100){
        console.log("Hundered");
}else if(num==1000){
        console.log("Thousand");
}else if(num==10000){
        console.log("Ten Thousand");
}else if(num==100000){
        console.log("Lakh");
}else if(num==1000000){
        console.log("Ten Lakh");
}else if(num==10000000){
        console.log("Crore");
}else if(num==100000000){
        console.log("Ten Crore");
}else{
	console.log("Invalid Input");
}

