const readline = require('readline-sync');
let a_str = readline.question("Enter first number: ");
let b_str = readline.question("Enter second number: ");
let c_str = readline.question("Enter third number: ");
let a = parseInt(a_str);
let b = parseInt(b_str);
let c = parseInt(c_str);
let p = a+b*c;
let q = c + a/b;
let r = a%b + c;
let s = a*b +c;
console.log("value1 is: "+p);
console.log("value2 is: "+q);
console.log("value3 is: "+r);
console.log("value4 is: "+s);
if(p<=q && p<=r && p<=s){
	console.log("Min Value is: "+p);
}else if(q<=p && q<=r && q<=s){
        console.log("Min Value is: "+q);
}else if(r<=p && r<=q && r<=s){
        console.log("Min Value is: "+r);
}else{
        console.log("Min Value is: "+s);
}
if(p>=q && p>=r && p>=s){
        console.log("Max Value is: "+p);
}else if(q>=p && q>=r && q>=s){
        console.log("Max Value is: "+q);
}else if(r>=p && r>=q && r>=s){
        console.log("Max Value is: "+r);
}else{
        console.log("Max Value is: "+s);
}


