function Ninja(name){
	this.name = name;
	this.health = 100;
	var speed = 3;
    var strength = 3;
    
	this.sayname = function(name){
		console.log("Hello, my ninja name is " + this.name);
		return this;
	}
	this.showstats = function(){
		console.log("Name: " + this.name+ ", Health: " +this.health+ ", Speed: ", +this.speed+ ", Strength: " +this.strength);
		return this;
	}
	this.drinksake = function(){
		this.health = this.health + 10;
		return this;
	}
	
}