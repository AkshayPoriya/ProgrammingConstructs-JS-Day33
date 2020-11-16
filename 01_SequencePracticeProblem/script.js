//1. Random function to get single digit
let a = Math.floor(Math.random() * 10);
console.log("Single Digit Random Number: " + a + "\n");

//2. Generate dice number between 1 to 6
let b = Math.floor(Math.random() * 6 + 1);
console.log("Dice Number: " + b + "\n");

//3. Sum of two dice numbers
let c = Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
console.log("Sum of two dice numbers: " + c + "\n");

//4. Generate 5 random 2-digit numbers and find their sum and average value;
let sum = 0;
for (let i = 0; i < 5; i++) {
	let x = Math.floor(Math.random() * 90 + 10);
	console.log("number " + (i + 1) + " is: " + x);
	sum += x;
}
console.log("Sum of five random 2-digit numbers is: " + sum);
console.log("Avg of five random 2-digit numbers is: " + (sum / 5) + "\n");

//5. Unit conversions
let one_inch_in_feet = 1 / 12;
console.log("42 inches are : " + one_inch_in_feet * 42 + " feets\n");

let area_1_plot = (60 * 12 * 2.54 / 100) * (40 * 12 * 2.54 / 100);
console.log("Area of 60feet X 40feet in meters is: " + area_1_plot);

console.log("Area of 25 such plots: " + 25 * area_1_plot);