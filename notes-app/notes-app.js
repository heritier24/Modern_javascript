

let p = document.querySelector('p')

// console.log(p)

let ps = document.querySelector('button', function(){
    console.log("is this working ");
});
document.querySelector('#create-note').addEventListener('click', function(e){
    console.log("is this working !");
    e.target.textContent = 'The button Was Clicked '
    document.querySelectorAll('.note').forEach(function(note){
        note.textContent = 'Created new note for each paragraph and the button was clicked '
    })
})
document.querySelector('#remove-note').addEventListener('click',function(e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    })
})