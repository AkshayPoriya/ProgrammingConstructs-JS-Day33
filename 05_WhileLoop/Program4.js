var money = 100;
let bets = 0;
let wins = 0;
while(money>0&& money<200){
	let luck = Math.floor(Math.random()*1000)%2;
	if(luck==0){
		money--;
		bets++;
	}else{
		money++;
		bets++;
		wins++;
	}
}
console.log("final money: "+ money);
console.log("total bets: "+bets);
console.log("total wins: "+wins);
