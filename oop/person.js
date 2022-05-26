
const Person = function(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person("heritier", "ganza ", 51)

console.log(`Dear ${me.firstName}, your age is ${me.age}. Thank you`)