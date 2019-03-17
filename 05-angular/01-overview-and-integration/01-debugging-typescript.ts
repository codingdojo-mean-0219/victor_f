// 1. Setting Types
var myString: string;

myString = "Bee stinger";

myString = "9";
// Changed the 9 to a string

//2. Setting the types for function parameters
function sayHello(name: string){
   return `Hello, ${name}!`;
}

console.log(sayHello("Kermit"));

console.log(sayHello("9"));
//changed the 9 to a string


//3.
function fullName(firstName?: string, lastName?: string, middleName?: string){
  let fullName = `${firstName} ${middleName} ${lastName}`;
  return fullName;
}
//made each variable optional with a "?"

console.log(fullName("Mary", "Moore", "Tyler"));
console.log(fullName("Jimbo", "Jones"));



//4.
interface Student {
  firstName: string;
  lastName: string;
  belts: number;
}
function graduate(ninja: Student){
  return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
  firstName: "Christine",
  lastName: "Yang",
  belts: 2
}
const jay = {
  firstName: "Jay",
  lastName: "Patel",
  belts: 4
}
// made Jay's "belt" into "belts"
console.log(graduate(christine));
console.log(graduate(jay));


//5

class Ninja {
  fullName: string;
  constructor(
     public firstName: string,
     public lastName: string){
        this.fullName = `${firstName} ${lastName}`;
     }
  debug(){
     console.log("Console.log() is my friend.")
  }
}

const shane = Ninja();

const turing = new Ninja("Alan","Turing")
}
//rewrote turing as a new class
function study(programmer: Ninja){
  return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}

console.log(study(turing));



//6

var increment = x => x + 1;
console.log(increment(3));
var square = x => {x * x};
console.log(square(4));

var multiply = x => y => x * y;

var math = (x, y) => {
   let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference]};

//7

class Elephant {
  constructor(public age: number){}

  birthday = (age)=>{
     this.age++;
  }
}
const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function(){
  console.log(`Babar's age is ${babar.age}.`)
  }, 2000)
//changed the birthday to an arrow function
