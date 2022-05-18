
const paragraphs = document.querySelectorAll('p')

paragraphs.forEach(function(paragraph){
    if(paragraph.textContent.includes('the')){
        paragraph.remove()
    }
})

const newParagraph = document.createElement('p')

newParagraph.textContent = 'new javascript paragraph '
document.querySelector('body').appendChild(newParagraph)

document.querySelector('button').addEventListener('click',function(){
    const myParagraph = document.createElement('p')
    myParagraph.textContent = 'new paragraph '
    document.querySelector('body').appendChild(myParagraph)
})