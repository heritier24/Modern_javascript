
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
    age: 21
}]

const under30 = people.filter( (person) => person.age < 30 )

console.log(under30);