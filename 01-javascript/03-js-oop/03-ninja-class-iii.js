class Ninja {
	constructor(name){
		this.name=name;
		this.health = 100;
		this.strength = 3;
		this.speed = 3;
	}
	sayname(){
		console.log("Hello, I am " + this.name + ",the ninja.");
		return this;
	}
	showstats(){
		console.log("Name: " + this.name+ ", Health: " +this.health+ ", Speed: ", +this.speed+ ", Strength: " +this.strength);
		return this;
	}
	drinksake(){
		this.health = this.health + 10;
		return this;
	}
}
class Sensei extends Ninja {
	constructor(name){
		super(name);
		this.health = 200;
		this.strength = 10;
		this.speed = 10;
		this.wisdom = 10;
	}
	speakwisdom(){
		const wiser = super.drinksake();
		console.log("What one programmer can do in one month, two programmers can do in two months.");
		return this;
	}
}
const sVic= new Sensei("Victor ");
sVic.sayname().showstats().speakwisdom();
