
let restaurant = {
    name: "Good restaurant",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partysize){
        let seatsLeft = this.guestCapacity - this.guestCount
        return partysize <= seatsLeft
    },
    seatParty: function(partysize){
        this.guestCount = this.guestCount + partysize
        // return
    },
    removeParty: function(partysize){
        this.guestCount= this.guestCount - partysize
        // return

    }
}
restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4));
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4));

