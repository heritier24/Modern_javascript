

document.querySelector('#restore').addEventListener('click',  () => {

    let restore = localStorage.getItem('data');

    console.log(JSON.parse(restore))
})