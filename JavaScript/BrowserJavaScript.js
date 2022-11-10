//Testpage: www.example.com

/*
document.querySelector('h1').addEventListener('click', 
function() { 
    console.log('clicked');
});
*/

/*
    //--------Exercise: Web page content update------

//To capture user input, you can use the built-in prompt() method, like this:

let answer = prompt('What is your name?');
if (typeof(answer) === 'string') {
    var h1 = document.createElement('h1')
    h1.innerText = answer;
    document.body.innerText = '';
    document.body.appendChild(h1);
}

//Once you have the user-provided input inside the answer variable, you can manipulate it any way you need to.
//For example, you can output the typed-in information on the screen, as an <h1> HTML element.
//This is probably the quickest and easiest way to capture user input on a website, but doing it this way is not 
//the most efficient approach, especially in more complex scenarios.This is where HTML forms come in.
//You can code a script which will take an input from an HTML form and display the text that a user types in on the screen.

var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})

    //--------Exercise: Capture Data--------
//The aim of this exercise is to access the content of an element, specifically to use a button click to replace text.

//Get h1 into a variable
var h1 = document.querySelector('h1')

//Code an array
var arr = [
        'Example Domain',
        'First Click',
        'Second Click',
        'Third Click'
    ]

//Write a click-handling function
function handleClicks() {
        switch(h1.innerText) {
            case arr[0]:
                h1.innerText = arr[1]
                break
            case arr[1]:
                h1.innerText = arr[2]
                break
            case arr[2]:
                h1.innerText = arr[3]
                break
            default:
                h1.innerText = arr[0]
        }
    }

//Add an event listener
h1.addEventListener('click', handleClicks);

*/



/*
    //---JSON is just a string - but there are rules-------

JSON is a string, but it must be a properly-formatted string. In other words, it must adhere to some rules.
If a JSON string is not properly formatted, JavaScript would not be able to parse it into a JavaScript object.
JSON can work with some primitives and some complex data types, as described below.
Only a subset of values in JavaScript can be properly stringified to JSON and parsed from a JavaScript object into a JSON string.

These values include:

    primitive values: strings, numbers, bolleans, null

    complex values: objects and arrays (no functions!)

    Objects have double-quoted strings for all keys

    Properties are comma-delimited both in JSON objects and in JSON arrays, just like in regular JavaScript code

    String properties must be surrounded in double quotes. For example: "fruits","vegetables"

    Number properties are represented using the regular JavaScript number syntax; e.g 5, 10, 1.2

    Boolean properties are represented using the regular JavaScript boolean syntax, that is: true and false

    Null as a property is the same as in regular JavaScript; it's just a null

You can use object literals and array literals, as long as you follow the above rules
What happens if you try to stringify a data type which is not accepted in JSON syntax?
For example, what if you try to stringify a function? The operation will silently fail.
If you try to stringify some other data types, such as a BigInt number, say 123n, you'd get the following error: Uncaught TypeError: Do not know how to serialize a BigInt.

-------Some examples of JSON strings-------

Here is an example of a stringified JSON object, with a single key-value pair:

'{"color":"red"}' 

Here's a bit more complex JSON object:

'{"color":"red", "nestedObject": { "color": "blue" } }' 

The above JSON object encodes two properties:

    "color":"red"

    "nestedObject": { "color": "blue" }

It's also possible to have a JSON string encoding just an array:

'["one", "two", "three"]'

The above JSON string encodes an array holding three items, three values of the string data type. Obviously, just like objects, arrays can nest other simple or complex data structures.

For example:

'[{ "color": "blue" }, {"color: "red"}]'

In the above example, the JSON string encodes an array which holds two objects, where each object consists of a single key-value pair, where both values are strings.

*/


        //Creating a JSON string and converting it into a JS object using PARSE:

'{"greeting":"hello"}'
//'{"greeting":"hello"}'
const jsonStr = '{"greeting":"hello"}'
//undefined
JSON.parse(jsonStr)
//{greeting: 'hello'}
const aPlainObj = JSON.parse(jsonStr) 
//undefined
aPlainObj.greeting = "hi"
//'hi'
aPlainObj
//{greeting: 'hi'}

        //Creating a JS object and converting it into a JSON string unsing STRINGIFY:

const data = {
    firtName: "John",
    lastName: "Doe",
    greeting: "Hello!",
}
//undefined
JSON.stringify(data)
//'{"firtName":"John","lastName":"Doe","greeting":"Hello!"}'
