


// challenge area 

// are both vegan ? only offer up vegan dishes 
// at least one vegan ? make sure to offer up some vegan options 
// Else, offer up anything on the menue 

let isGuestOneVegan = true
let isGuestTwoVegan = false 

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log("only offer up vegan dishes ");
}else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log("make sure to offer up some vegan options");
}else {
    console.log("offer up anything on the menue ");
}