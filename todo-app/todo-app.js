
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