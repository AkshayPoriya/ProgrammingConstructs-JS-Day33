const readline = require('readline-sync');
let str = readline.question("Enter y for degF to degC conversion, n for vice-versa: ");
str = str.toLowerCase();
let temp_str = readline.question("Enter temperature: ");
let temp = parseInt(temp_str);
function FtoDegC(temp){
	if(temp<32 || temp>212){
		console.log("Invalid input!");
		return;
	}
	console.log("temp is degC is: "+((temp-32)*(5/9)));
}
function CtoDegF(temp){
        if(temp<0 || temp>100){
                console.log("Invalid input!");
                return;
        }
        console.log("temp in degF is: " + ((temp*9/5)+32));
}
if(str=="y"){
	FtoDegC(temp);
}else{
	CtoDegF(temp);
}
