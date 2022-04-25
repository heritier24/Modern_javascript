
let ps = document.querySelectorAll('p');

ps.forEach(function(p){
    // p.remove()
    // p.textContent= 'added paragraph content'
})

document.querySelector('button').addEventListener('click', function(e){
    console.log('Is this Work ? ')
    console.log(e)
})


let todo =
    {
        name: 'heritier',
        gender: 'male',
        age: 25,
        status: 'single'
    }
localStorage.setItem('info', todo)

let recovery = localStorage.getItem('info')
let convert = JSON.parse(recovery)
console.log(JSON.parse(recovery))