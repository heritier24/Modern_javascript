

// challenge from the grade 

// students score ,  total possible score 
// calculate student score percentage of score then print the result in letters 
// grade depending on the percentage below

// 15/20 => you got C (75%) ! 
// A 90-100 , B 80-89, C 70-79 , D 60-69, e 0-59

let gradeCalc = function(score, marks=20, percentage=100){

    return (score * percentage) / marks
}
let result = gradeCalc(4);
if (result >= 90 && result <=100) {
    console.log(` You are in grade A (${result} %!)`);
}else if (result >= 80 && result <= 89) {
    console.log(`you are in grade B (${result} %!)`);
}else if(result >= 70 && result <= 79){
    console.log(`You are in grade C (${result} %!)`)
}else if(result >=60 && result <=69){
    console.log(`you are in grade D (${result} %!)`)
}else if(result >=0 && result <=59){
    console.log(`you are in grade F (${result} %!) `);
}else {
    console.log("Unclassfied ");
}