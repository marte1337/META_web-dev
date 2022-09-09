// Object Oriented Programming: 

//---Insert aus alter Datei---


//For of loops and objects:
//a for of loop can be run on arrays to loop over objects

//three built-in methods: Object.keys(), Object.values(), and Object.entries()

const car = {
    speed: 100,
    color: "blue"
}

console.log(Object.keys(car), Object.values(car)) //[ 'speed', 'color' ] [ 100, 'blue' ]
console.log(Object.entries(car)) //[ [ 'speed', 100 ], [ 'color', 'blue' ] ]
//return = Arrays bzw. Arrays in Arrays