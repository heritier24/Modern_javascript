
// const myAge = 20

// const message = myAge > 18 ? 'you can vote !' : ' you can not vote. '

// console.log(message)

const myAge = 20 

const showPage = () => {
    console.log("showing the page ");
}

const errorPage = () => {
    console.log("showing the error page ");
}

myAge >=20 ? showPage() : errorPage()




const team = ["kudibooks", "academic bridge"]

console.log(team.length <= 4 ? `team size : ${team.length}` : 'Too many people on your team')