//jest install terminal (direkt im ordner): 
//(opt.) npm init -y
//npm install --save-dev jest 
//(In the package.json file, locate the "scripts" entry, and inside of it, update the test entry to jest. )
//npm run test

//Funvtion to be tested:
function addFive(value) {
    return value + 5
}


//Export the function as a module:

module.exports = addFive;

