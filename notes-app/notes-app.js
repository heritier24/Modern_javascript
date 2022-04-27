

let p = document.querySelector('p')

// console.log(p)

let ps = document.querySelector('button', function(){
    console.log("is this working ");
});
document.querySelector('button').addEventListener('click', function(e){
    console.log("is this working !");
    e.target.textContent = 'The button Was Clicked '
    console.log('add Element in the paragraph ')
})