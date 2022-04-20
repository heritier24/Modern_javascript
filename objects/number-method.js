// let number = 103.346

// console.log(number);

// console.log(number.toFixed(2));

// // math round number 

// console.log(Math.round(number));
// console.log(Math.floor(number));
// console.log(Math.ceil(number));

// let randomNumber = Math.random()

// console.log(randomNumber);

let min = 1
let max = 5
let randomly = Math.floor(Math.random() * (max - min +1)) + min

// challenge area 
// creating function of generating a randowm number in the range if true is correct
//  false if not correct 
let makeGuest = function(number){
    if (number === randomly){
        return true
    }else {
        return false
    }
}
console.log(makeGuest(5));
console.log(randomly);