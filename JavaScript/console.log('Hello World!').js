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


/*function twoNums(a,b) {
    var c = a+b;
    console.log(c-a+b)
}
twoNums(2,13)*/

/*function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);*/

/*function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "red") {
            console.log(i*100, "Tomato!")
        }
        else if (arr[i] == "yellow") {
            console.log(i*100, "Citrus!")
        } 
        else if (arr[i] == "pink") {
            console.log(i*100, "Grapefruit!")
        }
        else {
            console.log(i*100, arr[i])
        }
    }
}
var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
listArrayItems(colors);
*/

/*function letterFinder(word, match) {
    for (var i=0; i<word.length; i++) {
        if (word[i]==match) {
            console.log("Found the", match, "at", i+1)
        } else {
            console.log("---No match found at", i+1)
        }
    }
}
letterFinder("test", "t")*/


/*
//Object Literals:

var table = {
    legs: 3,
    color: "brown",
    priceUSD: 100,
}
console.log(table.color)


var house = {
    rooms: 3,
    color: "brown",
    priceUSD: 10000,
}

console.log(house);
house.windows = 10;
console.log(house)
house.windows = 15;
console.log(house)


var house2 = {};
house2.rooms = 4;
house2.color = "pink";
house2.priceUSD = 12345;

//oder:

var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2);

//interchangable:

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

//Vorteil brackets: space characters; numbers as string data (nicht unbegingt gut); can evaluate expressions.

car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 5}

car["2022"] = 1901;
console.log(car); // {2022: 1901, color: 'green', speed: 100, number of doors: 5}

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}*/


/*
//Arrays are objects:

//To add new items to an array, I can use the push() method:
var fruits = [];
fruits.push("apple"); // ['apple']
fruits.push('pear'); // ['apple', 'pear']

//To remove the last item from an array, I can use the pop() method:  
fruits.pop();
console.log(fruits); // ['apple']



//f.ex. a function that takes all its arguments and pushes them into an array:

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr);
}
arrayBuilder('eins', 'zwei', 'drei')

//Additionally, I can save this function call to a variable:

var simpleArr = arrayBuilder('apple', 'pear', 'plum');

console.log(simpleArr); //undefined??
*/

/*Math Objects:

Number constants

Here are some of the built-in number constants that exist on the Math object: 

    The PI number: Math.PI 

    The Euler's constant: Math.E 

    The natural logarithm of 2: Math.LN2

Rounding methods

These include: 

     Math.ceil() - rounds up to the closest integer 

     Math.floor() - rounds down to the closest integer 

     Math.round() - rounds up to the closest integer if the decimal is .5 or above; otherwise, rounds down to the closest integer 

     Math.trunc() - trims the decimal, leaving only the integer

Arithmetic and calculus methods

Here is a non-conclusive list of some common arithmetic and calculus methods that exist on the Math object: 

    Math.pow(2,3) - calculates the number 2 to the power of 3, the result is 8 

    Math.sqrt(16) - calculates the square root of 16, the result is 4 

    Math.cbrt(8) - finds the cube root of 8, the result is 2 

    Math.abs(-10) - returns the absolute value, the result is 10 

    Logarithmic methods: Math.log(), Math.log2(), Math.log10() 

    Return the minimum and maximum values of all the inputs: Math.min(9,8,7) returns 7, Math.max(9,8,7) returns 9.

    Trigonometric methods: Math.sin(), Math.cos(), Math.tan(), etc.*/

//

/* // Math.random(): Generates a random decimal number between 0 and 0.99

    //Example: Generate number:
Math.random();

    //Save it to a variable:
var decimal = Math.random();

    //Log the value to the console
console.log(decimal)

    //...multiplied by 10:
console.log(decimal * 10)

    //...rounded:
console.log(Math.round(decimal * 10))


    //alt. Example Random Integer Number:
var decimal = Math.random() * 10;
var rounded = Math.ceil(decimal);
console.log(rounded)
*/


/*
//String cheat sheet:

var greet = "Hello, ";
var place = "World"

console.log(greet.length, greet.charAt(0), greet.concat("everybody in the ", place), place.indexOf("r"), greet.lastIndexOf("l"), greet.split("l"), greet.toUpperCase()+place.toUpperCase())

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
/*

        //----------Template literals (`` + ${...}):---------------
        const string1 = "A string primitive";
        const string2 = 'Also a string primitive';
        const string3 = `Yet another string primitive`;

//Differences between a template (``) and regular ("", '') string: 

    //First, it allows for variable interpolation:

    let greet = "Hello";
    let place = "World";
    console.log(`${greet} ${place} !`)

console.log(`${string1} is something different that ${string3} !`)

//second, template strings can span multiple lines

let multiline = `
    Using ES6
    backticks,
    multi-line
    strings are
    possible"
    `
console.log(multiline)


//third, interpolate variables because template literals allows for expression evaluation

console.log(`${1 + 1 + 1 + 1 + 1} stars!`)

*/


/*        //------DATA STRUCTURES: Objects, Arrays, Maps, Sets-------

//OBJECTS: object is unaltered, noniterable collection of key value pairs and
//you use objects when you need to store and later access a value under a KEY. 

//ARRAYS: an ordered iterable collection of values and you use arrays when you need 
//to store and later access a value under an INDEX.
//You only use the index to access the specific value stored in the array.
//When working with arrays, it's common to use a loop, such as a for loop to access and edit the data. 

//MAPS: A map is like an array because it's iterable. However, it consists of key value pairs.
//It's important not to confuse a map with an object. With maps any value can be used as a key.
//With objects, keys can only be strings or symbols. 

//SETS: A set is another collection where each item in the collection must be unique.
//For example, if you try to add a non unique item to a set, this operation will simply not be run.
//In other words, no errors will be thrown and no updates will be made to a set. 


//------Working with ARRAYS:--------

//Expl. finding an averade grade with an array:

const grades = [75, 90, 95, 85, 80, 85]
let gradesSum = 0

for (let i = 0; i < grades.length; i++) {
    gradesSum += grades[i];
    
}

console.log(`${grades} ergibt ${gradesSum}`)
console.log("Average grades:", gradesSum / grades.length)


//3 important built-in methods of arrays are: forEach, filter and map.


//THE forEach() METHOD: a handy method that allows you to loop over each member. 

const fruits = ['kiwi','mango','apple','pear']

function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex)

//the forEach() method accepts a function that will work on each array item. 
//That function's first parameter is the current array item itself, 
//and the second (optional) parameter is the index.

//Very often, the function that the forEach() method needs to use is passed in 
//directly into the method call, like this:

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
})


//THE filter() METHOD: filters your arrays based on a specific test. Those array items that pass the test are returned.
//the filter() method also accepts a function and that function performs some work on each of the items in the array.

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
}) //returned value: [30,40,50]


//THE map METHOD: is used to map each array item over to another array's item, 
//based on whatever work is performed inside the function that is passed-in to the map as a parameter. 

nums.map( function(num) {
    return num / 10
}) //returned value: [0,1,2,3,4,5]


//-------Working with OBJECTS-------

//EXPL. This task is to convert an object to an array:

const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)


//-------Working with MAPS------

//To make a new Map, you can use the Map constructor: new Map()

//A map can feel very similar to an object in JS. However, it doesn't have inheritance.
//No prototypes! This makes it useful as a data storage.

let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers) //Map(3) {1 => 'The Champion', 2 => 'The Runner-up', 3 => 'The third place'}

//To get a specific value, you need to use the get() method. For example:  
console.log(bestBoxers.get(1)) // 'The Champion'


//--------Working with SETS-----------

//A set is a collection of unique values.
//To build a new set, you can use the Set constructor: new Set()

//The Set constructor can, for example, accept an array.
//This means that we can use it to quickly filter an array for unique members.

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits) //{'apple', 'pear', 'plum'}


//--------Other data structures in JavaScript

//Besides the built-in data structures in JavaScript, it's possible to build non-native, custom data structures.
//These data structures come built-in natively in some other programming languages  or even those other programming languages don't support them natively.
//Some more advanced data structures that have not been covered include: Queues, Linked lists (singly-linked and doubly-linked), Trees, Graphs

*/

/*

        //-------Using SPREAD and REST operators------------

//Join arrays, objects using the rest/spread(?) operator:

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array 
//['apple', 'pear', 'plum', 'blueberry', 'strawberry']

//It's also easy to join objects:  
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}


//Add new members to arrays without using the push() method:
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies) //['onion', 'parsley', 'carrot', 'beetroot']


//Convert a string to an array using the spread operator:
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//Copy either an object or an array into a separate one:
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed) //201 200


//Copy an array into a completely separate array using the spread operator:
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2) //['apples'] 'not' ['apples','pears']


//----Rest property
//You can end a destructuring pattern with a rest property ...rest. 
//This pattern will store all remaining properties of the object or array 
//into a new object or array.

const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(others); // { b: 2, c: 3 }

const [first, ...others2] = [1, 2, 3];
console.log(others2); // [2, 3]

*/




// //----Final assignment:--------


// // Given variables
// const dishData = [
//     {
//         name: "Italian pasta",
//         price: 9.55
//     },
//     {
//         name: "Rice with veggies",
//         price: 8.65
//     },
//     {
//         name: "Chicken with potatoes",
//         price: 15.55
//     },
//     {
//         name: "Vegetarian Pizza",
//         price: 6.45
//     },
// ]
// const tax = 1.20;

// // Implement getPrices()
// function getPrices(taxBoolean) {
//     for (var dish of dishData) {
//         let finalPrice;
//         if (taxBoolean == true) {
//             finalPrice = dish.price * tax;
//         } else if (taxBoolean == false) {
//             finalPrice = dish.price;
//         } else {
//             console.log("You need to pass a boolean to the getPrices call!");
//             return;
//         }
//         console.log("Dish: " + dish.name + " Price: $" + finalPrice);
//     }
// }

// // Implement getDiscount()
// function getDiscount(taxBoolean, guests) {
//     getPrices(taxBoolean);
//     if (typeof(guests) == 'number' && guests > 0 && guests < 30) {
//         let discount = 0;
//         if (guests < 5) {
//             discount = 5;
//         } else if (guests >= 5) {
//             discount = 10;
//         }
//         console.log('Discount is: $' + discount);
//     } else {
//         console.log('The second argument must be a number between 0 and 30');
//     }
// }

// // Call getDiscount()
// getDiscount(true, 2);
// getDiscount(false, 10);




//          ----------more on THIS keyword---------


const player = {
    xPos: 0,
    yPos: 0,
    moveLeft: function(unit) {
        this.xPos -= unit;
    },
    moveRight: function(unit) {
        this.xPos += unit;
    },
    moveUp: function(unit) {
        this.yPos += unit;
    },
    moveDown: function(unit) {
        this.yPos -= unit;
    },
    getPosition() {
        console.log(this.xPos, this.yPos)
    }
}

player.getPosition()

player.moveRight(55)
player.moveLeft(3)
player.moveUp(100)
player.moveDown(8)

player.getPosition()