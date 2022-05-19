

// Functions - input, code, output 


let square = (num) => {

    let result = num * num 
    return result;
}

let value = square(3);
let othervalue = square(10);
console.log(value);
console.log(othervalue);

// challenge area 

// convert fahrenheit to celcius 
// call a couple of time (32->0) (68->20)
// print the converted values 
let fahrenheit = (value) => {
    let celcius = (value -32) * 5/9
    return celcius;
}
let tempOne = fahrenheit(32);
let tempTwo = fahrenheit(68);

console.log(tempOne);
console.log(tempTwo);
