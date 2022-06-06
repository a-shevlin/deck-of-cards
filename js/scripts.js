$(document).ready(function() {
  $(".cards").submit(function(event) {
    event.preventDefault();
    const numberArray = ["Ace","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    const suitArray = ["Hearts","Spades","Diamonds","Clubs"];
    let deck = [];
    suitArray.forEach(function(suit) {
      numberArray.forEach(function(number){
        deck.push(number + "of" + suit);
        $("#output").append(deck.toString());
      });
    }); 
  });

});