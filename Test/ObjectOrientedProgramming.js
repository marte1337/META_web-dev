// Object Oriented Programming: 

//---Insert aus alter Datei---


//For of loops and objects:
//a for of loop can be run on arrays to loop over objects; 
//a for of loop cannot work on an object directly, since an object is not iterable.
//Contrary to objects, arrays are iterable: 

const colors = ['red','orange','yellow']
for (var color of colors) {
    console.log(color);
}

//three built-in methods that receives an object as its parameter and return arrays: 
//Object.keys(), Object.values(), and Object.entries()

const car = {
    speed: 100,
    color: "blue"
}

console.log(Object.keys(car), Object.values(car)) //[ 'speed', 'color' ] [ 100, 'blue' ]
console.log(Object.entries(car)) //[ [ 'speed', 100 ], [ 'color', 'blue' ] ]
//return = Arrays bzw. Arrays in Arrays

//How to to loop over any object's own property keys and values:

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for(key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}