//console.log('Hello World!')

//This is a comment...

/* This
is
a
multi-line
comment*/

/* This is a multi-line comment in a single line */

/* console.log('Testing shit...')

var petDog = "Rex";
var petCat = "Pepper"

console.log(petDog)
console.log(petCat) */


//var light = ""

/*if(light == "green") {
    console.log("GOOOOO!")
} else if (light == "orange") {
    console.log("Get rdy...")
} else if (light == "red") {
   console.log("Don't drive.")
} else {
    console.log("Just drive motherfucker!!!")
}*/

/* switch(light) {
    case "green":
        console.log("GOOO!");
        break;
    case "orange":
        console.log("get rdy...");
        break;
    case "red":
        console.log("Stop");
        break;
    default:
        console.log("Just drive.");
        break;

} */

/*for (var i = 10; i > 0; i--) {
    console.log(i);
    
}
console.log("GOOO")*/

/*var counter = 15

while (counter > 1) {
    console.log(counter);
    counter = counter - 2;
}
console.log("Finish")*/

/*for (var i = 2020; i < 2022; i++) {
    console.log(i);
    for (var j = 1; j < 13; j++) {
    console.log(i, j)
    }
}*/


/*for(firstNum = 1; firstNum < 20; firstNum = firstNum + 3) {
    for(secNum = 100; secNum > 10; secNum = secNum - 13) {
        console.log(firstNum, "times", secNum, "equals", firstNum * secNum)
    }
}
*/


/*
for (var i = 1; i <= 10; i++) {
    if(i == 1) {
        console.log("Gold medal")
    } else if (i == 2) {
        console.log("Silver medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    } else {
        console.log(i)
    }
}


for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            console.log(i)
    }
}
*/

/*function addTwoNums(a,b) {
    var c = a+b;
    console.log(c+a-b)
}
addTwoNums(2,7)
addTwoNums(3,8)*/


 /*   //Methods = Object with Functions
var car = {};
car.mileage = 98765;
car.color = "red";
car.turnTheKey = function() {
    console.log("The engine is running")
}
car.lightsOn = function() {
    console.log("The lights are on.")
}
console.log(car);
car.turnTheKey();
car.lightsOn()
*/


/*    //TypeOf Operator:
//var test = typeof(345462)
//var test = typeof(function abc () {"..."})
var test = typeof(Math.random)

console.log(test)
*/

/*const square = function (number) {
    return number * number;
  }
  const x = square(4); 

  console.log(x)


  function zahl (a, b) {
    console.log(a + b)
  }
  zahl(2,3)
  */


/*    //ERROR HANDLING:
    function addTwoNums(a,b) {
        try {
            if(typeof(a) != "number") {
                throw new ReferenceError("the first argument is not a number")
            } else if (typeof(b) != "number") {
                throw new ReferenceError("the second argument is not a number")
            } else {
                console.log(a + b)
            }
        } catch(err) {
            console.log("Error!", err)
        }
    }
    addTwoNums(5, "5")
    console.log("It still works")
*/

 /*   // DEFENSIVE CODING:

    function letterFinder(word, match) {
        var condition1 = typeof(word) == 'string' && word.length >= 2;
        var condition2 = typeof(match) == 'string' && match.length == 1;
        if(condition1 && condition2) {
            for(var i = 0; i < word.length; i++) {
                if(word[i] == match) {
                    console.log('Found the', match, 'at', i)
                } else {
                    console.log('---No match found at', i)
                }
            }
        } else {
            console.log("Please pass correct arguments to the function")
        }
    }
    
    letterFinder("Cat","t")
*/


/*function doubleIt(num) {
    return num * 2
}

console.log(doubleIt(6))*/



/*    //FUNCTIONAL PROGRAMMING (FP): When writing FP code, we keep data and functionality 
    //separate and pass data into functions only when we want something computed.
    //In functional programming, functions return new values and then use those values 
    //somewhere else in the code.

function getTotal(a, b) {
    return a + b
}
var num1 = 3
var num2 = 4

var total = getTotal(num1, num2)
console.log(total)


//

function getDist (km, std) {
    return km / std
}

var kilometer = 360
var zeit = 3.5

var kmh = getDist(kilometer, zeit)
console.log(Math.round(kmh))
*/


/*    //Object-oriented programming (OOP). In this style, we group data and functionality 
    //as properties and methods inside objects.
    //In OOP, methods update properties stored in the object instead of generating new return values.

var virtualPet = {
    sleepy: true,
    nap: function () {
        this.sleepy = false
    }
}

console.log(virtualPet.sleepy)
virtualPet.nap()
console.log(virtualPet.sleepy)
*/

/*    //FP: First-class functions.
    //functions in JavaScript are truly first-class citizens, which can be assigned to variable 
    //names and passed around just like I would pass around a string, a number, an object, etc.

    function addTwoNums(a, b) {
        //console.log(a)
        //console.log(b)
        console.log(a + b)
    }
    
    function randomNum() {
        return Math.floor((Math.random() * 10) + 1);
    }
    function specificNum() { return 42 };
    
    var useRandom = true;

    var getNumber;
    if(useRandom) {
        getNumber = randomNum
       //console.log(getNumber())
    } else {
        getNumber = specificNum
        //console.log(getNumber())
    }
    
    addTwoNums(getNumber(), getNumber())
    
    //addTwoNums(console.log(getNumber()), console.log(getNumber()))
    //console.log(randomNum())
    //console.log(randomNum())
    //console.log(specificNum())
    //console.log(getNumber())

//invoke the addTwoNums() function, passing it the invocation of the getNumber() 
//variables as its first and second arguments.


    //A higher-order function is a function either accepts other functions as arguments and/or
    //returns functions when invoked

function addTwoNums2(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}

addTwoNums2(specificNum, specificNum);
addTwoNums2(specificNum, randomNum);

        //Pure functions and side-effects: A pure function returns the exact same result as long as it's given the same values.
        //An example of a pure function is the addTwoNums() function from the previous section
        /*Another rule for a function to be considered pure is that it should not have side-effects. A side-effect is any instance where a function makes a change outside of itself.

This includes: 

    changing variable values outside of the function itself, or even relying on outside variables 

    calling a Browser API (even the console itself!) 

    calling Math.random() - since the value cannot be reliably repeated

The topic of pure and impure functions can get somewhat complex.*/



/*     //TEST:

// Task 1: Build a function-based console log message generator
function consoleStyler(color, background, fontSize, txt) {
    var message = "%c" + txt;
    var style = `color: ${color};`
    style += `background: ${background};`
    style += `font-size: ${fontSize};`
    console.log(message, style)
}

// Task 2: Build another console log message generator
function celebrateStyler(reason) {
    var fontStyle = "color: tomato; font-size: 50px";
    if (reason === "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason === "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        console.log(message, style);
    }
    
}

// Task 3: Run both the consoleStyler and the celebrateStyler functions

consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
celebrateStyler('birthday')

// Task 4: Insert a congratulatory and custom message
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    consoleStyler(color, background, fontSize, txt);  
    celebrateStyler(reason);
}
// Call styleAndCelebrate
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!','champions')

*/

/* function meal(animal) {
    animal.food = animal.food + 10
}

let dog = {
    food: 10
}

console.log(dog)

meal(dog)
meal(dog)

console.log(dog)
*/

 /*   //OOP:

let purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function() {
        let calculation = this.shoes * this.stateTax
        console.log("Total:", calculation)
    }
}

let purchase2 = {
    shoes: 60,
    stateTax: 1.2,
    totalPrice: function() {
        let calculation = this.shoes * this.stateTax
        console.log("Total:", calculation)
    }
}

purchase1.totalPrice()
purchase1.stateTax

purchase2.totalPrice()

//FP
let shoe1 = 99
const TAX = 1.2

function total (object, taxes) {
    return object * taxes
}

let toPay = total(shoe1, TAX)
console.log(toPay)

*/




 /*   //Classes:

class Car {
    constructor(color, speed) {
        this.color = color
        this.speed = speed
    }
    turboOn() {
        console.log("Turbo is ON!") 
    }
}

const car1 = new Car ("red", 220)

//console.log(car1)

car1.turboOn()

console.log(car1)



//OOP Principles: Inheritance
//super/sub-classes: 

//class Animal {  }
//class Bird extends Animal {  }
//class Eagle extends Bird {}

//OOP Principles: Encapsulation
//Encapsulation is about you not having access to, or not being concerned with, how some 
//implementation works internally.


//OOP Principles: Abstraction
//An abstraction is about extracting the concept of what you're trying to do, rather than 
//dealing with a specific manifestation of that concept. 

//OOP Principles: Polymorphism
//Polymorphism is a word derived from the Greek language meaning "multiple forms". 
//An alternative translation might be: "something that can take on many shapes".

const bycicle = {
    bell: function() {
        return "Ring, ring! Get away, please!"
    }
}

const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}


function ringTheBell(belltype) {
    console.log(belltype.bell())
}

ringTheBell(bycicle)
ringTheBell(door)

//var bell1 = bycicle.bell()
//var bell2 = door.bell()
//console.log(bell1, "VS", bell2)



//more Polymorphism:


class Bird {
    useWings() {
        console.log("Flying!")
    }
}

class Woodpecker extends Bird {

}

class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var woodyWood = new Woodpecker();
var baldEagle = new Eagle();
var kingPenguin = new Penguin();

woodyWood.useWings(); //"Flying!"
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

*/



/*    //Constructors

JavaScript has a number of built-in object types, such as:

Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.

These objects are sometimes referred to as "native objects".

Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native objects. All the constructors are capitalized.

To use a constructor function, I must prepend it with the operator new. 

However, not all the built-in objects come with a constructor function. An example of such an object type is the built-in Math object.


//new Date()
//console.log(Date())
//console.log(Date())
//console.log(Date())

function dateSpam() {
    for (let i = 0; i < 50; i++) {
        console.log(i, Date())
        
    }
} 
dateSpam()
*/

//console.log(Math.pow(13, 8))

/* //custom constructor:

function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");

console.log(kiwiIcecream);
console.log(appleIcecream);
appleIcecream.meltIt()
console.log(kiwiIcecream.flavor)


//Instead of new Object (also new String, Number, and Boolean), you should stick to the object literal syntax: {}.

//Instead of using Array, Function, and RegExp constructors, you should use their array literal, 
//function literal, and pattern literal varieties: [], () {}, and /()/.

console.log("abc".match(/d/)); // null
console.log("abc".match(/a/)); // ['a', index: 0, input: 'abcd', groups: undefined]

//However, when building objects of other built-in types, we can use the constructor.
//Here are a few examples:

new Date();
new Error();
new Map();
new Promise();
new Set();
new WeakSet();
new WeakMap();
*/

/*more Inheritance:

class Bird {
    constructor(hasWings, canFly, hasFeathers) {
    this.hasWings = true,
    this.canFly = true,
    this.hasFeathers = true
    }
}
let eagle1 = new Bird

console.log("eagle1:", eagle1)
console.log("eagle1 has wings:", eagle1.hasWings)
console.log("eagle1 can fly:", eagle1.canFly)
console.log("eagle1 has feathers:", eagle1.hasFeathers)

let eagle2 = new Bird

console.log("eagle2 has wings:", eagle2.hasWings)

let penguin = new Bird

penguin = {
    canFly: false
} //funzt nicht! Macht neues Obj auf

console.log("penguin has wings:", penguin.hasWings)
console.log("penguin can fly:", penguin.canFly)

*/


 /*   // Creating Classes:


class Train {
    constructor(color, lightsOn) {
        this.color = color
        this.lightsOn = lightsOn
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn
        console.log('Lights toggle operation:', this.lightsOn)
    }
    lightsStatus() {
        if (this.lightsOn === true) {
            console.log("Lights are on!")
        } else {
            console.log("Lights are off!")
        }
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        let proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

let myFirstTrain = new Train("red", false)
let mySecondTrain = new Train('blue', false);
let myThirdTrain = new Train('blue', false);

myFirstTrain.lightsStatus()
myFirstTrain.toggleLights()
myFirstTrain.lightsStatus()
myFirstTrain.getSelf()
myFirstTrain.getPrototype() //{constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}
//getPrototype funzt nicht.

//the class syntax in JavaScript allows us to clearly separate individual object's data 
//- which exists on the object instance itself - from the shared object's functionality 
//(methods), which exist on the prototype and are shared by all object instances.


//In JavaScript classes, super is used to specify what property gets inherited from the super-class in the sub-class.

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

let ice1 = new HighSpeedTrain(122, true, "white", true)
ice1.toggleHighSpeed()
//ice1.toggleLights()
//ice1.toggleNewLights() //kaputt, KP warum unten gehts
ice1.lightsStatus()

console.log (ice1)

*/

/*  //META-Kurs Code:

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

train5.getPrototype(); // {constructor: ƒ, toggleLights: ƒ, lightsStatus: ƒ, getSelf: ƒ, getPrototype: ƒ}
highSpeed1.getPrototype(); // Train {constructor: ƒ, toggleHighSpeed: ƒ, toggleLights: ƒ}
*/


 /*   //Using class instance as another class' constructor's property:

    class StationaryBike {
        constructor(position, gears) {
            this.position = position
            this.gears = gears
        }
    }
    
    class Treadmill {
        constructor(position, modes) {
            this.position = position
            this.modes = modes
        }
    }
    
    class Gym {
        constructor(openHrs, stationaryBikePos, treadmillPos) {
            this.openHrs = openHrs
            this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
            this.treadmill = new Treadmill(treadmillPos, 5)
        }
    }
    
    var boxingGym = new Gym("7-22", "right corner", "left corner")
    
    console.log(boxingGym.openHrs) //
    console.log(boxingGym.stationaryBike) //
    console.log(boxingGym.treadmill) //

    */

   /*     //Using default Parameters, defensive Coding:


class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6
*/



 /*   //Building OO Program:

    class Animal {
        constructor(color = 'yellow', energy = 100) {
            this.color = color;
            this.energy = energy;
        }
        isActive() {
            if(this.energy > 0) {
                this.energy -= 20;
                console.log('Energy is decreasing, currently at:', this.energy)
            } else if(this.energy == 0){
                this.sleep();
            }
        }
        sleep() {
            this.energy += 20;
            console.log('Energy is increasing, currently at:', this.energy)
        }
        getColor() {
            console.log(this.color)
        }
    }
    
    class Cat extends Animal {
        constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
            super(color, energy);
            this.sound = sound;
            this.canClimbTrees = canClimbTrees;
            this.canJumpHigh = canJumpHigh;
        }
        makeSound() {
            console.log(this.sound);
        }
    }
    
    class Bird extends Animal {
        constructor(sound = 'chirp', canFly = true, color, energy) {
            super(color, energy)
            this.sound = sound;
            this.canFly = canFly;
        }
        makeSound() {
            console.log(this.sound);
        }
    }
    
    class HouseCat extends Cat {
        constructor(houseCatSound = "meow", sound,canJumpHigh,canClimbTrees, color,energy) {
            super(sound,canJumpHigh,canClimbTrees, color,energy);
            this.houseCatSound = houseCatSound;
        }
        makeSound(option) {
            if (option) {
                super.makeSound();
            }
            console.log(this.houseCatSound);
        }
    }
    
    class Tiger extends Cat {
        constructor(tigerSound = "Roar!", sound,canJumpHigh,canClimbTrees, color,energy) {
            super(sound,canJumpHigh,canClimbTrees, color,energy);
            this.tigerSound = tigerSound;
        }
        makeSound(option) {
            if (option) {
                super.makeSound();
            }
            console.log(this.tigerSound);
        }
    }
    
    class Parrot extends Bird {
        constructor(canTalk = false, sound,canFly, color,energy) {
            super(sound,canFly, color,energy);
            this.canTalk = canTalk;
        }
        makeSound(option) {
            if (option) {
                super.makeSound();
            }
            if (this.canTalk) {
                console.log("I'm a talking parrot!");
            }
        }
    }
    
    var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
    var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk
    
    fiji.makeSound(); // undefined
    fiji.makeSound(true); // chirp
    
    polly.makeSound(); // I'm a talking parrot!
    polly.makeSound(true); // chirp, I'm a talking parrot!
    
    polly.color; // yellow
    polly.energy; // 100
    
    polly.isActive(); // Energy is decreasing, currently at: 80
    
    var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
    penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }
    
    penguin.sound; // 'shriek'
    penguin.canFly; // false
    penguin.color; // 'black and white'
    penguin.energy; // 200
    penguin.isActive(); // Energy is decreasing, currently at: 180
    
    var leo = new HouseCat();
    
    // leo, no purring please:
    leo.makeSound(false); // meow
    // leo, both purr and meow now:
    leo.makeSound(true); // purr, meow
    
    var cuddles = new Tiger();
    cuddles.makeSound(false); // Roar!
    cuddles.makeSound(true); // purr, Roar!

    console.log(cuddles.color)
    */


    class Person {
        sayHello() {
            console.log("Hello");
        }
    }

    class Friend extends Person {
        sayHello() {
            console.log("Hey");
        }
    }

    var result = new Friend();
    result.sayHello();