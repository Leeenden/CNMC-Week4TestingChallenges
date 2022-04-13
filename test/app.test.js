const { test, expect } = require("@jest/globals");
const functions = require('../app.js')

// const { test, expect } = require("@jest/globals");
// let funcs = require("./app");

// describe("testing my add function", ()=>{
//     test("should equal 5 when pass 2 and 3", () =>{
//     expect(funcs.addFunction(2,3)).toBe(5);
//     }),
//     test("should not equal 6 when pass 2 and 3", ()=>{
//     expect(funcs.addFunction(2,3)).not.toBe(6);
//     })
// });

// test("should contain Stuart", ()=>{
//     expect(funcs.myArray).toContain("Stuart");
// });

// ---------------------------------------------------------------------------------
// ------------------------------- syntax help--------------------------------------

//  toBe = comparing values

// toBeNull()

// toBeTruthy = A value is truthy if the coercion of this value to a boolean yields the value true.
            // The operation !! tests for truthiness by coercing the value passed to expect to a boolean. 
            // Note that contrarily to what the currently accepted answer implies, == true is not a correct test for truthiness.

//  toEqual  = recursively checks every field of an object or array.

// ---------------------------------------------------------------------------------
// ------------------------------- Activity 1 --------------------------------------

describe("Activity 1", () => {
    test("not null", () => {
        expect(functions.linden("linden")).not.toBeNull()
    });
})

// --------------------------------------------------------------------------------
// ------------------------------- Activity 2 -------------------------------------

describe("Activity 2", () => {
    test("is truthy", () => {
        expect(functions.truthy(1)).toBeTruthy()
    });
});

// --------------------------------------------------------------------------------
// ------------------------------- Activity 3 -------------------------------------

describe("Activity 3", () => {
    test("not falsy", () => {
        expect(functions.notFalsy()).not.toBeFalsy()
    });

});

// --------------------------------------------------------------------------------
// ------------------------------- Activity 4 -------------------------------------

describe("Activity 4", () => {
    test("create object with two properties", () => {
        expect(functions.createObject("linden")).toEqual({ firstName: "linden", age: 24 })
    });
});

// --------------------------------------------------------------------------------
// ------------------------------- Activity 5 -------------------------------------

describe("Activity 5", () => {
    test("breakfast choices array with 6 or more characters", () => {
        let array = ["porridge", "toast", "bacon", "cereal", "croissant"]
        expect(functions.breakfast(array)).toEqual(["porridge", "cereal","croissant"])
    });
});