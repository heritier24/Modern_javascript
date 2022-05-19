
let ps = document.querySelectorAll('p');

ps.forEach((p) => {
    // p.remove()
    // p.textContent= 'added paragraph content'
})

document.querySelector('button').addEventListener('click', (e) =>{
    console.log('Is this Work ? ')
    console.log(e)
})


document.querySelector('#new-todo').addEventListener('submit',(e) => {
    e.preventDefault()
    // console.log(e.target.elements.text.value)
    let p = document.querySelector('p')
    p.textContent = e.target.elements.text.value
})
document.querySelector('#hide-completed').addEventListener('change', (e) => {
    
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
const seearching = {
    searchText: ''
}

const incompleteTodos = todos.filter( (todo) => {
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

const renderSearch = function(todos, seearching){
    const filterTodos = todos.filter(function(todo){
        return todo.text.includes(seearching.searchText)
    })
    document.querySelector('#notes').innerHTML = '';
    filterTodos.forEach(function(todo){
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#notes').appendChild(todoEl)
    })
}
renderSearch(todos, seearching)

// search todo 
document.querySelector('#search-todo').addEventListener('input', (e) => {
    seearching.searchText = e.target.value
    renderSearch(todos, seearching)
})



document.querySelector('#todo-text').addEventListener('change', (e) => {
    e.preventDefault();
    console.log(e.target.value)
})

const notes = [{
    title: "checmistry",
    body: "chemistry note "
},
{
    title: "biology",
    body: "biology note"
},
{
    title: "mathematics",
    body: "mathematics notes"
}
]

const filters = {
    searchText: ''
}

const renderNotes = function(notes, filters){
    const filteredNotes = notes.filter( (note) => {
        return note.title.includes(filters.searchText)
    })

    console.log(filteredNotes)
    // filteredNotes.forEach(function (note){
    //     const notEl = document.createElement('p')
    //     notEl.textContent = note.title
    //     document.querySelector('body').appendChild(notEl)
    // })
}
renderNotes(notes, filters)

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notes,filters)
    console.log("ok")
})