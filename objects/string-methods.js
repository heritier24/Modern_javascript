
let myname = "    Heritier Ganza"

// length property 
console.log(myname.length)


// converty string to upper case 
console.log(myname.toUpperCase());
// convert string to lower case 

console.log(myname.toLowerCase());

// includes method
let password = "manchesterunited"
console.log(password.includes('password'));

// trim 
console.log(myname.trim());


// chellenge area 
// length is more than 8 - and it doesn't contain the word password 
let isValidPassword = function(password){
    return password.length > 8 
}

console.log(isValidPassword('ganza'))
console.log(isValidPassword('heritierganza'));