

let myAccount = {
    name: "Heritier Ganza",
    expense: 0,
    account: 0
}

let otherAccount = myAccount
otherAccount.account = 1000

let addexpense = function(account, amount){
    account.expense = account.expense + amount
}

addexpense(myAccount, 2.50)
console.log(myAccount)
