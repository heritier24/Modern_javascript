
const square = (num) => {
    return num * num 
}

console.log(square(5))

const squareLong = (num) => num * num

console.log(squareLong(8));

const people = [{
    name: "heritier",
    age: 28,
},{
    name: "ganza",
    age: 31,

},
{
    name: "Tamba",
    age: 22
}]

const serarching = {
    search : ''
}

const under30 = people.filter( (person) => person.age < 30 )

console.log(under30);

// challenge 
// 1. find the person with the age is equatl to 25 
// 2. print that person 

const person = people.find( (person) => person.age === 22)
console.log(person.name)
