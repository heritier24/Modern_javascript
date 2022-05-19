
// Multiple arguments 
let add = function(a,b,c){
    return a + b + c ;
}

let result = add(5, 8, 2);

console.log(result);

// Default arguments 

let getScoreText = (name= "Heritier", score = 40) =>{
    return 'name:' +name + "  score : " + score
}

let scoreText = getScoreText();
console.log(scoreText);

// challenge area 

// * 2 people go to the restaurant then after payment ask the tip for the 20 % of the bills paid

let getTip = (bills = 100, tip = 20) => {
    return (bills * tip) /100
}
let tipAmount = getTip();
console.log(tipAmount);