
let ps = document.querySelectorAll('p');

ps.forEach(function(p){
    // p.remove()
    // p.textContent= 'added paragraph content'
})

document.querySelector('button').addEventListener('click', function(e){
    console.log('Is this Work ? ')
    console.log(e)
})


document.querySelector('#new-todo').addEventListener('submit',function(e){
    e.preventDefault()
    // console.log(e.target.elements.text.value)
    let p = document.querySelector('p')
    p.textContent = e.target.elements.text.value
})
document.querySelector('#hide-completed').addEventListener('change',function(e){
    
})

const todos = [{
    text: "Order food ",
    completed: true
},
{
    text: "Order kichen",
    completed: true
},
{
    text: "Order drinks",
    completed: false
},
{
    text: "Do work",
    completed: false
},
{
    text: 'Excercises',
    completed: true
}
]

const incompleteTodos = todos.filter(function (todo){
    return !todo.completed
})
const summary = document.createElement('h2')

summary.textContent = `You have ${incompleteTodos.length} todo left `
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo){
    const p = document.createElement('p')
    p.textContent = todo.text
    document.querySelector('body').appendChild(p)
})