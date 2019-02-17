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
    this.punch = function(target){
		if (target instanceof Ninja)
			target.health -= 5;
			console.log(target.name + " was punched by "+this.name+ "and lost 5 health!");
			return this;
		else
			console.log("Please attack a Ninja");
	}
	this.kick = function(target){
		if(target instanceof Ninja)
			var damage = this.strength*15;
			target.health -= damage;
			console.log(target.name + ' was kicked by ' +this.name+ 'and lost '+damage+ ' health!');
			return this;
		else
			console.log("Please attack a Ninja");
	}
	
}