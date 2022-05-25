
const Person = function(firstName, lastName, age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

const me = new Person("heritier", "ganza ", 51)

console.log(me.firstName)