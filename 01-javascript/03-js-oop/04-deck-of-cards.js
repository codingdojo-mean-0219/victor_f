class Card{
    constructor(suit, name, value){
        this.suit = suit;
        this.value = name;
        this.name = value;
    
    }
    show(){
        console.log(this);
    }
}
class Deck{
    constructor(){
        this.deck_Of_Cards = [];
        var suit = ["Clubs","Diamonds","Spades","Hearts"];
        var value = [[1,"Two"],[2,"Three"],[3,"Four"],[4,"Five"],[5,"Six"],[6,"Seven"],[7,"Eight"],[8,"Nine"],[9,"Ten"],[10,"Jack"],[11,"Queen"],[12,"King"],[13,"Ace"]];
        for(var i in suit){
            for(var h in value){
                var card = new Card(suit[i], value[h][0], value[h][1]);
                this.deck_Of_Cards.push(card);
            }
        }
    }
    shuffle(){
        var shuff = this.deck_Of_Cards.length, o, t;
        while(shuff){
            t = Math.floor(Math.random() * shuff--);
            o = this.deck_Of_Cards[shuff];
            this.deck_Of_Cards[shuff] = this.deck_Of_Cards[t];
            this.deck_Of_Cards[t] = o;
        }
        return this;
    }
    reset(){
        
    }
}

deck = new Deck;
console.log(deck[0]);
console.log(deck.deck_Of_Cards);
deck.shuffle();

class Player{
    constructor(name,deck){
        this.name = name;
        this.deck = deck;
        this.hand = [];
    }
    draw(amount){
        for(var i = 0; i < amount; i++){
            this.hand.push(this.deck.deck_Of_Cards.shift())
        }
    }
    showHand(hand){
        for(var i =0; i<this.hand.length; i++){
            console.log(hand[i]);
        }
        console.log();
    }
}

Victor = new Player("Victor", deck);
Victor.draw(5);
Victor.showHand(Victor.hand);
Victor.draw(1);
Victor.showHand(Victor.hand);