const readline = require('readline-sync');
let num_str = readline.question("Enter your choice for conversion: \n1. Feeet to inch \n2. Feet to meter \n3. Inch to feet \n4. Meter to feet\n");
let num = parseInt(num_str);
switch(num){
        case 1:
                let feet_str = readline.question("Enter how many feets? ");
		let feet = parseInt(feet_str);
		console.log(feet*12 + " inches");
                break;
        case 2:
                let feet_to_meter_str = readline.question("Enter how many feets? ");
                let feets = parseInt(feet_to_meter_str);
                console.log(feets*12*2.54/100 + " Meters");
                break;
        case 3:
                let inch_str = readline.question("Enter how many inches? ");
                let inch = parseInt(inch_str);
                console.log(inch/12 + " feets");
                break;
        case 4:
                let meter_str = readline.question("Enter how many meters? ");
                let meter = parseInt(meter_str);
                console.log(meter*100/2.54/12 + " feets");
                break;
        default:
                break;
}
