$(document).ready(function() {
  $("form#cards").submit(function(event) {
    event.preventDefault();
    const numberArray = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    const suitArray = ["Hearts","Spades","Diamonds","Clubs"];
    console.log(suitArray);
    let deck = [];
    suitArray.forEach(function(suit) {
      numberArray.forEach(function(number){
        deck.push(number + " of " + suit);
        $("#output").append("<li>" + deck.toString().split(",").pop() + "</li>");
        /*had to have submit in a form and output in separate div
        .toString() then .split(",") to remove commas between elements then .pop() to separate each element in deck[]*/
      });
    }); 
  });
});