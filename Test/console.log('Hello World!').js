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

