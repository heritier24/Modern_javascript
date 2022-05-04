

document.querySelector('#restore').addEventListener('click', function () {

    let restore = localStorage.getItem('data');

    console.log(JSON.parse(restore))
})