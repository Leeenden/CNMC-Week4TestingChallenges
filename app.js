// function addFunction(num1, num2){
//     newNum = num1 + num2;
//     return newNum;
// }

// console.log(addFunction(2,3));

// let myArray = ["Dan", "Stuart", "Tim"]

// module.exports = {
//     addFunction,
//     myArray,
// }
// ---------------------------------------------------------------------------------
// ------------------------------- Activity 1 --------------------------------------

//  To make sure what is returned is not ‘null’. 

let linden = (name) => {
    return name
};

// ---------------------------------------------------------------------------------
// --------------------------- Activity 2 and 3 -----------------------------------

// A value that is truthy. A value that is not falsy 

let truthy = (x) => {
    return x
};

let notFalsy = () => {
    return true
};

// these confused me, spent a while wondering if there was typo as i didnt think something would legit be called "Truthy"

// ---------------------------------------------------------------------------------
// ------------------------------- Activity 4 --------------------------------------

// Create a function that creates an object with 2 properties, test to makes sure that the objects properties are equal to your test function 

let createObject = (name) => {
    let person = {
        firstName: name,
        age: 24
    }
    return person
}
// ---------------------------------------------------------------------------------
// ------------------------------- Activity 5 --------------------------------------

// A function that will return items in an array with 6 or more characters 

let breakfast = (arr) => {
    let sixLetters = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > 5){
            sixLetters.push(arr[i])
        }
    };
    return sixLetters
};

module.exports = {
    linden,
    truthy, 
    notFalsy,
    createObject,
    breakfast
}