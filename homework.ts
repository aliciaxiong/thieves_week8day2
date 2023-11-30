// Homework Exercises

// 1. For each of these values, what type will the TypeScript compiler infer?
let a = 118;
// A: number 

let b = 'Thieves';
// A: string 

let c = [true, false, false];
// A: boolean[]

let d = {age: 3};
// A: age: number 

let e = [3]
// A: number[]

let f;
// A: any 

let g = []
// A: any[]



// 2. What are the compilation errors in each of the following code snippets?
let song: {
    title: string,
    releaseYear?: number,
} = {
    title: 'Lose Yourself'
};
// A: I added the " ? " after release year because we won't have to need the release year. 


let prices = [100, 200, 300];
prices[0] = 100;
// A: I corrected the "$100" to just 100 because the prices are suppose 
//to be only numbers but the response was giving returning a string, which it shouldn't

function myFunc(a: number, b: number): number {
    return a + b 
}
// A: since we are returning a number, I am just returning a + b which should equal out to be a number, 
// it can be any function as long as the function return is a number 



// -- CODEWARS -- 
// QUESTION #1: Cat years, Dog years

// INSTRUCTION: 
// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]
// NOTES:
// humanYears >= 1
// humanYears are whole numbers only
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

// First, we need to set cat and dog years to 0 first. Then we would use a for loop like in python to 
// continue the if condition 
// First, we need to set cat and dog years to 0 first. Then we would use a for loop like in python to 
// continue the if condition 

// ANSWER: 
var humanYearsCatYearsDogYears = function(humanYears) {
    let c_Years = 0;
    let d_Years = 0;
    for (let year = 1; year <= humanYears; year++) {
        if (year === 1) {
            c_Years += 15; 
            d_Years += 15; 
        } else if (year === 2) {
            c_Years += 9; 
            d_Years += 9; 
        } else {
            c_Years += 4;
            d_Years += 5;
        }
    }
  return [humanYears, c_Years, d_Years];
}



// -- CODEWARS -- 
// QUESTION #2: Fix your code before the garden dies!
// You have an award-winning garden and every day the plants need exactly 40mm of water. You created a great piece of 
// JavaScript to calculate the amount of water your plants will need when you have taken into consideration the amount of 
// rain water that is forecast for the day. Your jealous neighbour hacked your computer and filled your code with bugs.

// INSTRUCTION: 
// function rainAmount(mm){
//     if (rainAmount = 40) {
//         return "You need to give your plant " + {rainAmount - 40} + " mm of water"
//    };
//    if else: {
//         return "Your plant has had more than enough water for today!"
//    };
// }


// First thing I immediately notice is the if else..its suppose to just be else and remove the semi colon that is outside of the brackets 
// in the bracket, the name of the function needs to be replaced with the mm 
// in the paranthesis the name of the function needs to be replaced with the mm as well 
// if mm = 40, we don't need to give it anymore water, but the return is asking that we need to give it more, so it should be < instead of =


// ANSWER: 
function rainAmount(mm){
    if (mm < 40) {
         return "You need to give your plant " + {40 - mm} + "mm of water" // < -- extra space between the quotation and mm was the reason my code was not working. 
    }   else {
         return "Your plant has had more than enough water for today!"
    }
}