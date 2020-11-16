const readline = require('readline-sync');
let day_str = readline.question("Enter week-day in number between [1,7]: ");
let day = parseInt(day_str);
let day_word = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
if(day<1 || day>7){
        console.log("Incorrect Input!");
}else{
        console.log("Week-day entered is: "+day_word[day-1]);
}
