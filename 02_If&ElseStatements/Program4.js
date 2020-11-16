const HEAD = 0;
const TAIL = 1;
let coin_flip = Math.floor(Math.random()*1000)%2;
if(coin_flip==HEAD){
	console.log("Head it is!");
}else{
	console.log("Tail it is!");
}
