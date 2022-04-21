

// create an array with five todos 
// you have x todos 

// print the first and second to last items -> Todo: walk the dog

const todos = ["todo 1", "todo 2 ", "todo 3", "todo 4", "todo 5"];

console.log("you have " + todos.length + "todos ");

console.log("Todo:" + todos[0])
console.log("Todo:" +todos[todos.length -2])

// second challenge 

/// create an arrays 
// delete the second item 
// adding the item in the last 
// remove the first item 

const work = ["first todo ", "second todo", "third todo ", "another todo", "exercise todo"]
console.log(work)
work.splice(2,1)
work.push("added todo")
work.shift()

console.log("you have "+ work.length + "work ")
console.log(work)


