

let p = document.querySelector('p')

// console.log(p)

// p.remove()
let ps = document.querySelectorAll('p');

ps.forEach(function(p){
    p.textContent = '**** '
})