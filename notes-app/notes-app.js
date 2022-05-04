

const filters = {
    searchText: '',
    hideCompleted: false
}
document.querySelector('#for-fun').addEventListener('input', function (e) {
    console.log(e.target.checked)
})

const myData = {
    name: 'Heritier Ganza ',
    sex: 'Male ',
    age: 25
}

localStorage.setItem('data', JSON.stringify(myData));