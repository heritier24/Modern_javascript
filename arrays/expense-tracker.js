
const account = {
    name: 'Heritier Ganza',
    expenses: [],
    income: [],
    addExpenses: function(description, amount){
        this.expenses.push({
            description: description,
            amount: amount
        })
    },
    addIncome: function(description, amount) {
        this.income.push({
            description: description,
            amount: amount
        })
    },
    getAccountSummary: function() {
        let totalexpenses = 0;
        let totalincome = 0;

        this.income.forEach(function(income){
            totalincome = totalincome + income.amount
        })

        this.expenses.forEach(function(expense){
            totalexpenses = totalexpenses + expense.amount
        })
        let balance = totalincome - totalexpenses

        return `${this.name} Has a balance of $${balance}. $${totalincome} in income. $${totalexpenses} in expenses`
    }
}

// Expenses : description , amount 
// add expense: description, amount 
// getaccount summary -> total up all expenses -> Andrew Mead has $1250 in expenses. 

// another challenge 
// add income array to account 
// add income method, description and amount 
// Tweak get account summary : heritier ganza has a balance of $10. $100 in income. $90 in expenses
account.addExpenses("rent", 70000)
account.addExpenses("transport", 20000)
account.addIncome("salary", 250000)
account.addIncome("airtime", 10000)

console.log(account)

console.log(account.getAccountSummary());





