// Global function scope 
// local function scope 



let fahrenheit = function(value){
    let celcius = (value -32) * 5/9
    return celcius;
}
let tempOne = fahrenheit(32);
let tempTwo = fahrenheit(68);

console.log(tempOne);
console.log(tempTwo);